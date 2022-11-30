import React, { Component, useEffect } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';

const Container = () => {

    useEffect(() => {
        const editor = grapesjs.init({
            container: '#gjs',
            plugins: ['gjs-preset-newsletter']
        });
        editor.BlockManager.add('my-first-block', {
            label: 'Simple block',
            content: `<div class="my-block margin-only" 
                style="box-sizing: border-box; height: 100px; margin: 10vh 0 0 0; text-align: center;">
                This is a simple block 2</div>`,
        });
    })

    return (
        <div id="gjs">
        </div>
    );

}

export default Container;