import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

export default class CustomBraftEditor extends Component {
    static displayName = 'CustomBraftEditor';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            content: '<p>123</p>',
            contentId : ''
        };
    }

    handleRawChange = (content) => {
        console.log(content);
    };

    handleChange = (rawContent) => {
        console.log(rawContent);
        this.setState({
            content: rawContent,
            contentId: rawContent,
        })
    };

    // 示例，不允许选择大于100K的文件
    validateFn = (file) => {
        console.log('test file upload')
        // return file.size < 1024 * 100
        return true
    };

    uploadFn = (param) => {

        const serverURL = 'http://api.okayapi.com/?s=App.User_Set.Add'
        const xhr = new XMLHttpRequest
        const fd = new FormData()

        // libraryId可用于通过mediaLibrary示例来操作对应的媒体内容
        console.log(param)

        const successFn = (response) => {
            // 假设服务端直接返回文件上传后的地址
            // 上传成功后调用param.success并传入上传后的文件地址
            param.success({
                url: xhr.responseText,
                meta: {
                    id: 'xxx',
                    title: 'xxx',
                    alt: 'xxx',
                    loop: true, // 指定音视频是否循环播放
                    autoPlay: true, // 指定音视频是否自动播放
                    controls: true, // 指定音视频是否显示控制栏
                    poster: 'http://xxx/xx.png', // 指定视频播放器的封面
                }
            })
        }

        const progressFn = (event) => {
            // 上传进度发生变化时调用param.progress
            param.progress(event.loaded / event.total * 100)
        }

        const errorFn = (response) => {
            // 上传发生错误时调用param.error
            param.error({
                msg: 'unable to upload.'
            })
        }

        xhr.upload.addEventListener("progress", progressFn, false)
        xhr.addEventListener("load", successFn, false)
        xhr.addEventListener("error", errorFn, false)
        xhr.addEventListener("abort", errorFn, false)

        fd.append('file', param.file)
        xhr.open('POST', serverURL, true)
        xhr.send(fd)

    };

    render() {
        const editorProps = {
            height: 500,
            contentFormat: 'html',
            initialContent: '<p></p>',
            onChange: this.handleChange,
            onRawChange: this.handleRawChange,
            media: {
                // validateFn: this.validateFn,
                // uploadFn: this.uploadFn,
            }
        };

        const editorPropsDisplay = {
            height: 1000,
            contentFormat: 'html',
            disabled: true,
            controls: [],
            initialContent: this.state.content,
            contentId: this.state.contentId,
        };

        return (
            <IceContainer>
                <BraftEditor {...editorProps} />
                <p></p>
                <p>##################################</p>
                <p></p>
                <BraftEditor {...editorPropsDisplay} />
            </IceContainer>
        );
    }
}
