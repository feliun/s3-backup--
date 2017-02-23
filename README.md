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



