import styled from  'styled-components'

export const Gifs = styled.div`
      --gifShadow-size : var(--gridList-gap, 6px);
        margin-bottom: .5em;
        position: relative;


        a{
            color: #000;
            display: block;
            text-decoration: none;
            position: relative;
            width: 100%;
        }
`

export const Img = styled.img`
    width: 100%;
    object-fit: contain;
    vertical-align: top;
`

export const GifH4 = styled.h4`
     background: rgba(0, 0, 0, .3);
     bottom: 0;
     font-size: 12px;
     color: #fff;
     margin: 0;
     position: absolute;
`
