- Install Apex: curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sudo sh
- set a policy like this in your account (IAM)

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "iam:CreateRole",
        "iam:CreatePolicy",
        "iam:AttachRolePolicy",
        "iam:PassRole",
        "lambda:GetFunction",
        "lambda:CreateFunction",
        "lambda:DeleteFunction",
        "lambda:InvokeFunction",
        "lambda:GetFunctionConfiguration",
        "lambda:UpdateFunctionConfiguration",
        "lambda:UpdateFunctionCode",
        "lambda:CreateAlias",
        "lambda:UpdateAlias",
        "lambda:GetAlias",
        "lambda:ListVersionsByFunction",
        "logs:FilterLogEvents",
        "cloudwatch:GetMetricStatistics"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
```

- To start your project run

```
AWS_PROFILE=<your_profile> apex init
```
And follow the instructions

- Deploy the sample function
```
AWS_PROFILE=<your_profile> apex deploy
```
- And test it
```
AWS_PROFILE=<your_profile> apex invoke hello
```

- set your runtime in project.json

´´´
"runtime": "nodejs4.3"
´´´

- Set your handler (for node it defaults to index.handler)

´´´
"handler": "index.handle"
´´´

- Deploy a function in particular
´´´
"deploy-hello": "AWS_PROFILE=feliun apex deploy hello"
´´´

- Pass a json and watch cloudtrail logs
´´´
"run-with-sample": "AWS_PROFILE=feliun apex invoke hello < sample.json"
´´´

FOR FURTHER INFO CHECK: http://apex.run/

