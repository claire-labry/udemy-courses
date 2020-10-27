provider "aws" {
    region = "us-east-2"
    # not putting actual keys; purely practicing purposes
    access_key = "access key goes here" 
    secret_key = "secret key goes here"
}

# resource "aws_instance" "web" {
#     ami = "{data.aws_ami.ubuntu.id}"
#     instance_type = "t2.micro"
# }

# resource "<provider>_<resource_type>" "name" {
#     config options .....
#     key = "value"
#     key2 = "value2"

# }