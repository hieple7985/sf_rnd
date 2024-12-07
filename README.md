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
[Open the specified Salesforce org in the default web browser]
sf org open --target-org letronghiep1985@curious-fox-ap12pb.com

[Set the specified Salesforce org as the default Dev Hub]
sf config set target-dev-hub=letronghiep1985@curious-fox-ap12pb.com

[Create a new scratch org using the specified configuration file
and alias it as 'dreamhouse-org']
sf org create scratch -d -f config/project-scratch-def.json -a dreamhouse-org

[Open the newly created scratch org in the default web browser]
sf org open

[Scratch Org Site]
- https://energy-java-8934-dev-ed.scratch.my.salesforce-setup.com/lightning/setup/ObjectManager/home
```

## Deployment

### Tab Deploy

```sh
sf project deploy start -m "CustomTab:MyCustomTab"
```

### Project Deploy

```sh
sf project deploy start -d force-app
sf project deploy start --target-org dreamhouse-org
sf project deploy start --target-org test-3ealmada6h7y@example.com
```

### Component Deploy

```sh
sf project deploy start -m "LightningComponentBundle:loginComponent"
```

## Development

### Assign Scratch Org

```sh
sf config set target-org=dreamhouse-org
```

### Org List

```sh
sf org list --all
```

### Open Scratch Org

```sh
sf org open --target-org dreamhouse-org
```

### Object Manager

- https://energy-java-8934-dev-ed.scratch.my.salesforce-setup.com/lightning/setup/ObjectManager/home

```sh
(Account Object -> Fields & Relationships -> New)
- Email -> Type = Email
- Password -> Type = Text (Length = 16)
```

### App Builder

```sh
(lightning App Builder -> FlexiPageList)
- https://energy-java-8934-dev-ed.scratch.my.salesforce-setup.com/lightning/setup/FlexiPageList/page
```

## Visual Studio Code

- Extensions

```sh
  - Install **Salesforce Extensions Pack** from the Marketplace.
  - Install **Node.js** v18 LTS.
  - Check Salesforce CLI integration with VS Code.
```

## How to change the language

```sh
https://YOUR_INSTANCE.lightning.force.com/lightning/settings/personal/LanguageAndTimeZone/home

1. Go to Setup
2. Search for "Company Information"
3. Edit the Default Language setting
4. Set it to "English"
5. Save changes
```
