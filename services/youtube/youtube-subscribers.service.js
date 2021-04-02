'use strict'

const { documentation, YouTubeBase } = require('./youtube-base')

module.exports = class YouTubeSubscribes extends YouTubeBase {
  static route = {
    base: 'youtube/channel/subscribers',
    pattern: ':channelId',
  }

  static get examples() {
    const preview = this.render({
      statistics: { subscriberCount: 14577 },
      channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
    })
    // link[] is not allowed in examples
    delete preview.link
    return [
      {
        title: 'YouTube Subscriber Counts',
        namedParams: { channelId: 'UC8butISFwT-Wl7EV0hUK0BQ' },
        staticPreview: preview,
        documentation,
      },
    ]
  }

  static render({ statistics, channelId }) {
    return super.renderSingleStat({
      statistics,
      statisticName: 'subscriber',
      channelId,
    })
  }
}
