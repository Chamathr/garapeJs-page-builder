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
                        key: 'gjsProject',
                    },
                }
            }
        });

        editor.on('component:update', e => {
            const pageBody = editor.runCommand('gjs-get-inlined-html')
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