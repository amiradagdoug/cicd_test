# backend.tf

terraform {
  backend "s3" {
    bucket = "my-website-bucket-234808siiifd"
    key    = "terraform.tfstate"
    region = "eu-central-1"
  }
}
