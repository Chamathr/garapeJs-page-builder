import React, { useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';

const Container = () => {

    let editor = null

    useEffect(() => {
        editor = grapesjs.init({
            container: '#gjs',
            plugins: ['gjs-preset-newsletter'],

            storageManager: {
                type: 'local',
                autosave: true,
                autoload: true, 
                stepsBeforeSave: 0, 
                options: {
                    local: { 
                        key: 'gjsPage',
                    },
                }
            },
            
            /*use this if need upload image to cloud. by default save images as base64*/
            /*
            assetManager: {
                storeOnChange: true,
                storeAfterUpload: true,
                upload: `<image_upload_api>`,
                credentials: 'omit',
                uploadName: 'images',
                autoAdd: true,
                embedAsBase64: true,
                multiUpload: false
            }
            */
        });

        editor.on('component:select', e => {
            const pageBody = editor.getHtml()
            localStorage.setItem("pageContent", pageBody);
        });

    })

    const handleSubmit = () => {
        const pageContent = localStorage.getItem("pageContent");
        console.log(pageContent)
    }

    return (
        <>
            <div id="gjs">
            </div>

            <button onClick={handleSubmit}>Add page</button>
        </>
    );

}

export default Container;