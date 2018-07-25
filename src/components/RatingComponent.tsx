import * as React from 'react'

export default class RatingComponent extends React.Component<{value: number}> {
    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    render() {
        const MAX_RATING = 10;
        let rating = this.props.value
        let percentage = rating / MAX_RATING / 2

        if (rating < MAX_RATING / 2) {
            var green = percentage * 255
            var red = 255
        } else {
            green = 255
            red = 255 - percentage * 255
        }

        let color = this.rgbToHex(red, green, 0)
        let style = {
            color: color,
            border: 'solid 1px ' + color,
            borderRadius: '50%',
            padding: '10px',
            margin: '0 0 0 10px',
            fontSize: '25px'
        }

        return ( 
            <a style={style}>{rating}</a>
        )
    }
}
