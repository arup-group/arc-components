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

resource "azurerm_static_site" "arup-arc-infra-prod-documentation" {
  name                = "arup-arc-prod-documentation"
  resource_group_name = azurerm_resource_group.arup-arc-infra-prod-rg.name
  location            = "westeurope"
  sku_tier            = "Free"
  sku_size            = "Free"
  tags = {
    CostCenter   = "01-89915"
    Environment  = "Production"
    FinanceAdmin = "liz.lane@arup.com"
    JobNumber    = "071101-42"
    Owner        = "daragh.anderson@arup.com"
  }
}

resource "azurerm_application_insights" "arup-arc-infra-prod-appinsights" {
  name                = "arup-arc-infra-prod-appinsights"
  location            = azurerm_resource_group.arup-arc-infra-prod-rg.location
  resource_group_name = azurerm_resource_group.arup-arc-infra-prod-rg.name
  application_type    = "web"
  tags = {
    CostCenter   = "01-89915"
    FinanceAdmin = "liz.lane@arup.com"
    JobNumber    = "071101-42"
    Owner        = "daragh.anderson@arup.com"
  }
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
