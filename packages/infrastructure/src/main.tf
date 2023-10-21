terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

provider "azurerm" {
  skip_provider_registration = true
  features {}
}

resource "azurerm_resource_group" "arup-arc-infra-prod-rg" {
  name     = "arup-arc-infra-prod-rg"
  location = "UK South"
  tags = {
    Application        = "ARC project needs cloud infra resources"
    CostCenter         = "01-89915"
    CreationDate       = "2023-10-20T17:34:44Z"
    Creator            = "arup-terraform-production-open"
    Criticality        = "Not Defined"
    Environment        = "prod"
    FinanceAdmin       = "liz.lane@arup.com"
    JobNumber          = "071101-42"
    OnPremConnectivity = "No"
    Owner              = "daragh.anderson@arup.com"
    repo               = "arup-arc-infra-rg"
    RequestNumber      = "RITM0730296"
    Source             = "Terraform"
  }
}
