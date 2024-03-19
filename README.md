# Amazon Web Services (AWS) Guide

This guide provides instructions and best practices for various AWS services for web hosting, automation, scalability, and monitoring. The Notes has been prepared during workshop organised in PDEU.

<a href="https://shaharsh624.github.io/Amazon-Web-Services-AWS/Notes/AWS%20-%20Amazon%20Web%20Services%2082ebdc4120ea4fa39413571772cb2e6d">See Complete Tutorial</a>

## AWS EC2 - Elastic Compute 2

AWS EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud. Here's how you can utilize it:

-   **Creation**: Launch EC2 instances for both Windows and Linux platforms.
-   **Setup**: Configure EC2 instances as web servers using Windows Server for hosting static websites and Linux AMI with Apache2.
-   **Deletion**: Properly terminate instances when they are no longer needed to avoid unnecessary costs.

## AWS Amplify

AWS Amplify simplifies the deployment of web applications and backend services. You can deploy apps with ease using Amplify's capabilities.

## AWS Load Balancing and Auto Scaling

-   **Load Balancing**: Distribute incoming traffic across multiple EC2 instances to ensure high availability and fault tolerance.
-   **Auto Scaling**: Automatically adjust the number of EC2 instances based on traffic demand to optimize performance and cost.

## EC2 Launch Template

EC2 Launch Templates enable you to create reusable configuration templates for launching EC2 instances with predefined settings.

## Simple Notification Service (SNS)

SNS provides a flexible, fully managed pub/sub messaging service. Use it to send notifications or alerts to a variety of endpoints.

## AWS CloudWatch

CloudWatch allows you to monitor AWS resources and applications in real-time. Set up alarms and dashboards to gain insights into system performance.

## AWS S3 - Simple Storage Service

S3 offers scalable object storage for data backup, archival, and hosting static assets for web applications.

## IAM - Identity and Access Management

IAM enables you to manage user access and permissions to AWS resources securely. Follow the principle of least privilege to ensure security.

## Terraform - Infrastructure Automation

Terraform simplifies the provisioning and management of AWS infrastructure through code. Define your infrastructure as code and apply changes with ease.

## AWS RDS - Relational Database Service

RDS offers managed database services for MySQL, PostgreSQL, SQL Server, and other relational databases. Easily set up, operate, and scale databases in the cloud.

## AWS Snowmobile

Snowmobile is an exabyte-scale data transfer service used to securely migrate large volumes of data to AWS.

## AWS VPC - Virtual Private Cloud

VPC provides a logically isolated section of the AWS cloud where you can launch resources in a virtual network. Configure subnets, route tables, and network gateways for secure communication.

---

This guide covers essential AWS services and practices for deploying, managing, and scaling web applications and infrastructure in the cloud. For detailed instructions and further customization, refer to AWS documentation and best practices.
