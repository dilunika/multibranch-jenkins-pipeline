import {Bucket} from "@aws-cdk/aws-s3";
import {Construct, RemovalPolicy, Stack, StackProps} from "@aws-cdk/core";
import {BucketDeployment, Source} from "@aws-cdk/aws-s3-deployment";

export interface WebSiteStackProps extends StackProps{
  envPrefix: string;
}

export class WebSiteStack extends Stack {

  constructor(scope: Construct, id: string, props: WebSiteStackProps) {
    super(scope, id, props);

    const bucketName = `jens-mb-site-${props.envPrefix}`;

    const websiteBucket = new Bucket(this, bucketName, {
      bucketName,
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html"
    });

    new BucketDeployment(this, `jens-mb-site-${props.envPrefix}-deployment`, {
      sources: [Source.asset("../website")],
      destinationBucket: websiteBucket
    });
  }
}
