# getPrefix of all the Salesforce objects in your Org

The first 3-digits of the Salesforce ID are always the Entity ID which can be used to determine the type of the entity.  You can see the list of standard objects here :
* Kowledge Aeticle: [Standard Field Record ID Prefix Decoder](https://help.salesforce.com/articleView?id=Standard-Field-Record-ID-Prefix-Decoder)

With this package, you can see the list of object prefix with its API Name and Label for **both Standard and all Custom objects** in your Org.

## Installation and usage
You can install this as an unmanaged package from here:
* [Production](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t28000000qnlX)
* [Sandbox](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t28000000qnlX)

The package contains:
* Visualforce page
* Tab for the Visualforce page
* Custom Apex controller class for the Visualforce page
* Test class for the Apex controller class

## Japanese Note
ご使用のSalesforce組織に存在するオブジェクトの3桁のプレフィックスを一覧するプログラムですプログラムです。標準・カスタムの区別なく、組織に存在するすべてのオブジェクトを一覧します。
