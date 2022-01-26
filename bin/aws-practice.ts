#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AndrewGuestBook } from '../lib/aws-practice';

const app = new cdk.App();
new AndrewGuestBook(app, 'AndrewGuestBookV2');
