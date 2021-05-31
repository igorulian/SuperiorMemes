import styled , {css} from 'styled-components'


const dragActive = css`
    border-color: #78e5e5
`

const dragReject = css`
    border-color: #e57878
`

export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
    border: 2px dashed #faf601;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    width: 280px;
    height: 280px;
    margin-bottom: 10px;
    text-align: center;
    align-itens: center;

    ${props => props.isDragActive && dragActive}
    ${props => props.isDragReject && dragReject}
`
const messageColors = {
    default: '#faf601',
    error: '#e57878',
    sucess: '#78e5e5'
}

export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justfy-content: center;
    align-itens: center;
    padding: 15px 0;
    margin-top: 60px;
    font-size: 27px;
    padding-left: 3px

`