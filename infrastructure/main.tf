locals {
  resource_group_name           = "arup-arc-infra-prod-rg"
  tf_state_storage_account_name = "tfstatem51yp"
  tags = {
    Application        = "ARC project needs cloud infra resources"
    CostCenter         = "01-89915"
    CreationDate       = "2023-10-20T17:34:44Z"
    Creator            = "arup-terraform-production-open"
    Criticality        = "Other"
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

terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">3.0.0"
    }
  }

  backend "azurerm" {
    resource_group_name  = local.resource_group_name
    storage_account_name = local.tf_state_storage_account_name
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  skip_provider_registration = true
  subscription_id = "17bd5e73-b7db-4291-a621-6d393cc0cff4"
  features { }
}

resource "azurerm_resource_group" "arup-arc-infra-prod-rg" {
  name     = local.resource_group_name
  location = "UK South"
  tags     = local.tags
}


resource "azurerm_storage_account" "tfstate" {
  name                            = local.tf_state_storage_account_name
  resource_group_name             = azurerm_resource_group.arup-arc-infra-prod-rg.name
  location                        = azurerm_resource_group.arup-arc-infra-prod-rg.location
  account_tier                    = "Standard"
  account_replication_type        = "LRS"
  allow_nested_items_to_be_public = false
  tags                            = local.tags
}

resource "azurerm_storage_container" "tfstate" {
  name                  = "tfstate"
  storage_account_name  = azurerm_storage_account.tfstate.name
  container_access_type = "private"
}

resource "azurerm_static_site" "arup-arc-infra-prod-documentation" {
  name                = "arup-arc-prod-documentation"
  resource_group_name = azurerm_resource_group.arup-arc-infra-prod-rg.name
  location            = "westeurope"
  sku_tier            = "Free"
  sku_size            = "Free"
  tags                = local.tags
}

resource "azurerm_application_insights" "arup-arc-infra-prod-appinsights" {
  name                = "arup-arc-infra-prod-appinsights"
  location            = azurerm_resource_group.arup-arc-infra-prod-rg.location
  resource_group_name = azurerm_resource_group.arup-arc-infra-prod-rg.name
  application_type    = "web"
  tags                = local.tags
}

resource "azurerm_consumption_budget_resource_group" "arup-arc-infra-prod-budget" {
  name              = "arup-arc-infra-prod-budget"
  resource_group_id = azurerm_resource_group.arup-arc-infra-prod-rg.id
  amount            = 1
  time_grain        = "Monthly"

  time_period {
    start_date = "2024-08-01T00:00:00Z"
    end_date   = "2030-08-01T00:00:00Z"
  }

  notification {
    enabled        = true
    threshold      = 50.0
    operator       = "GreaterThanOrEqualTo"
    contact_emails = ["liz.lane@arup.com", "daragh.anderson@arup.com", "dom.egginton@arup.com"]
  }

  notification {
    enabled        = true
    threshold      = 75.0
    operator       = "GreaterThanOrEqualTo"
    contact_emails = ["liz.lane@arup.com", "daragh.anderson@arup.com", "dom.egginton@arup.com"]
  }

  notification {
    enabled        = true
    threshold      = 100.0
    operator       = "GreaterThanOrEqualTo"
    contact_emails = ["liz.lane@arup.com", "daragh.anderson@arup.com", "dom.egginton@arup.com"]
  }
}
