# terraform notes
 - terrform is written in hashicorp configuration language
 - has a .tf file extension 
 - one of the selling points of terraform is that regardless of what provider you're using, the syntax (terrform) stays the same; that way you don't have to learn the underlying api i.e. aws or azure
 - when you put in your provider (refer to main.tf) type in the CLI `terraform init` and that will initalize the backend, checks for provider plugins, initalize the provider plugins (in my case it's AWS)
 - you'll know if successful when your terminal has a green section stating 'Terraform has been successfully initalized'
 - after that its highly recommended to run `terraform plan` to just check and see how your instances are doing and ensuring that nothing is going to break 
 - +create means create a new instance; - means delete instance; ~ means modify instance