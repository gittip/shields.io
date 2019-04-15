'use strict'

const Joi = require('joi')
const serverSecrets = require('../../lib/server-secrets')
const { isBuildStatus, renderBuildStatusBadge } = require('../build-status')
const { optionalUrl } = require('../validators')
const { BaseJsonService } = require('..')

const DroneBuildSchema = Joi.object({
  status: Joi.alternatives()
    .try(isBuildStatus, Joi.equal('none'))
    .required(),
}).required()

const queryParamSchema = Joi.object({
  server: optionalUrl,
}).required()

module.exports = class DroneBuild extends BaseJsonService {
  static get category() {
    return 'build'
  }

  static get route() {
    return {
      queryParamSchema,
      base: 'drone/build',
      pattern: ':user/:repo/:branch*',
    }
  }

  static get staticPreview() {
    return {
      message: 'success',
      color: 'brightgreen',
    }
  }

  static get defaultBadgeData() {
    return {
      label: 'build',
    }
  }

  static render({ status }) {
    return renderBuildStatusBadge({ status })
  }

  async handle({ user, repo, branch }, { server }) {
    const options = {
      qs: {
        ref: branch ? `refs/heads/${branch}` : undefined,
      },
    }
    if (serverSecrets.drone_token) {
      options.headers = {
        Authorization: `Bearer ${serverSecrets.drone_token}`,
      }
    }
    if (!server) {
      server = 'https://cloud.drone.io'
    }
    const json = await this._requestJson({
      options,
      schema: DroneBuildSchema,
      url: `${server}/api/repos/${user}/${repo}/builds/latest`,
    })
    return renderBuildStatusBadge({ status: json.status })
  }

  static get examples() {
    return [
      {
        title: 'Drone (cloud)',
        pattern: ':user/:repo',
        namedParams: {
          user: 'drone',
          repo: 'drone',
        },
        staticPreview: {
          label: 'build',
          message: 'success',
          color: 'brightgreen',
        },
      },
      {
        title: 'Drone (cloud) with branch',
        pattern: ':user/:repo/:branch',
        namedParams: {
          user: 'drone',
          repo: 'drone',
          branch: 'master',
        },
        staticPreview: {
          label: 'build',
          message: 'success',
          color: 'brightgreen',
        },
      },
      {
        title: 'Drone (self-hosted)',
        pattern: ':user/:repo?server=https://drone.shields.io',
        namedParams: {
          user: 'badges',
          repo: 'shields',
        },
        staticPreview: {
          label: 'build',
          message: 'success',
          color: 'brightgreen',
        },
      },
      {
        title: 'Drone (self-hosted) with branch',
        pattern: ':user/:repo/:branch?server=https://drone.shields.io',
        namedParams: {
          user: 'badges',
          repo: 'shields',
          branch: 'feat/awesome-thing',
        },
        staticPreview: {
          label: 'build',
          message: 'success',
          color: 'brightgreen',
        },
      },
    ]
  }
}
