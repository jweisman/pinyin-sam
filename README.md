# Pinyin API

Serverless implementation of the [Hanzi to Pinyin](https://www.npmjs.com/package/hanzi-to-pinyin) function.

## Run Locally
* Install [`sam` CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Clone repository
* Run `npm install`
* Run `npm start`
* Visit http://localhost:3000/pinyin/%E6%88%91%E7%9A%84%E7%8C%AB%E5%96%9C%E6%AC%A2%E5%90%83%E8%8B%B9%E6%9E%9C in a browser.

## Deploy to AWS
* Create a `.nmprc` file as follows:
```
s3_bucket_name = my-bucket-name # Name of bucket in your AWS account to upload the assets to
region = ap-southeast-1 # Region to deploy to
cloud_formation_stack_name = PinyinApi # Stack name
```
* Run `npm run deploy`
* Test the API with the output URL
