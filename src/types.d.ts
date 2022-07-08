export interface EmbedMessage {
    type: 'size' | 'other'
}

export interface EmbedSizeMessage extends EmbedMessage {
    type: 'size'
    width: Dimension['width']
    height: Dimension['height']
}

export type Dimension = {
    width: number
    height: number
}
