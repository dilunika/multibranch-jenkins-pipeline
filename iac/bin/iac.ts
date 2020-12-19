#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {WebSiteStack, WebSiteStackProps} from '../lib/web-site-stack';

const app = new cdk.App();

const envPrefix = app.node.tryGetContext('envPrefix');

const props: WebSiteStackProps = {
    envPrefix,
    env: {
        account: '388429540325',
        region: 'ap-southeast-2'
    }
};

new WebSiteStack(app, 'IacStack', props);
