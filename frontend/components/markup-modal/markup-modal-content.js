import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { examplePropType } from '../../lib/service-definitions/service-definition-prop-types'
import { H3 } from '../common'
import Customizer from '../customizer/customizer'

const Documentation = styled.div`
  max-width: 800px;
  margin: 35px auto 20px;
`

export default class MarkupModalContent extends React.Component {
  static propTypes = {
    example: examplePropType,
    baseUrl: PropTypes.string.isRequired,
  }

  renderDocumentation() {
    const {
      example: { documentation },
    } = this.props

    return documentation ? (
      <Documentation dangerouslySetInnerHTML={documentation} />
    ) : null
  }

  render() {
    const {
      example: {
        title,
        example: {
          pattern,
          namedParams,
          queryParams,
          editable,
          style: exampleInitialStyle,
        },
        link,
        preview: { style: previewInitialStyle } = {},
      },
      baseUrl,
    } = this.props
    return (
      <>
        <H3>{title}</H3>
        {this.renderDocumentation()}
        <Customizer
          baseUrl={baseUrl}
          exampleNamedParams={namedParams}
          exampleQueryParams={queryParams}
          initialStyle={previewInitialStyle || exampleInitialStyle}
          isPathEditable={editable}
          link={link}
          pattern={pattern}
          title={title}
        />
      </>
    )
  }
}
