# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)

## Getting Started

- Install Salesforce CLI.
- Install Salesforce Extensions Pack.
- Install Node.js (LTS version).

```sh
  nvm install --lts=v18.20.5
  nvm use v18.20.5
  npm install
```

- Check Salesforce CLI integration with VS Code.

### NodeJS Dependency

```json
"eslint": "^8.57.1"
```

### Development Guidline

````sh
(Auth CLI)

List: sf org list --all

Help: sf org login web --help
Force: sf force auth web login
Default: sf org login web --instance-url https://curious-fox-ap12pb-dev-ed.trailblaze.my.salesforce.com --set-default

- User: letronghiep1985@curious-fox-ap12pb.com
- Password: 6evjOfFFISar

> Successfully authorized letronghiep1985-mxke@force.com with org ID 00Dd50000044tIAEAY

(Assign Org-Id Alias)

```sh
Command: sf alias set <alias> <OrgId>
Assign: sf alias set MyDevHub letronghiep1985@curious-fox-ap12pb.com
Unassign: sf alias unset MyDevHub
````

## Create and Test Our Scratch Org

```sh
sf org open --target-org letronghiep1985@curious-fox-ap12pb.com

sf config set target-dev-hub=letronghiep1985@curious-fox-ap12pb.com

sf org create scratch -d -f config/project-scratch-def.json -a dreamhouse-org

sf org open
```

## Visual Studio Code

- Extensions

```sh
  - Install **Salesforce Extensions Pack** from the Marketplace.
  - Install **Node.js**.
  - Check Salesforce CLI integration with VS Code.
```
