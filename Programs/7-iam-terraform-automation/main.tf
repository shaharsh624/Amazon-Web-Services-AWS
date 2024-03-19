provider "aws" {
  region     = "ap-south-1"
  access_key = "AKIAQRU7H34APSCDY2QT"
  secret_key = "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"
}
resource "aws_instance" "app_server" {
  ami           = "ami-007020fd9c84e18c7"
  instance_type = "t2.micro"
  count = 5
  tags = {
    Name = "testServerInstance"
  }
}