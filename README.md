# getPrefix of all the Salesforce objects in your Org

The first 3-digits of the Salesforce ID are always the Entity ID which can be used to determine the type of the entity.  You can see the list of standard objects here :
* Kowledge Aeticle: [Standard Field Record ID Prefix Decoder](https://help.salesforce.com/articleView?id=Standard-Field-Record-ID-Prefix-Decoder)

Using Lightning Component or Visualforce page in this package, you can see the list of object prefix with its API Name and Label for **both Standard and all Custom objects** in your Org.

## Installation and usage
You can install this as an unmanaged package from here:
* [Production](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t28000000qnlc)
* [Sandbox](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t28000000qnlc)

The package contains:
* Lightning Component (parent and child)
* Visualforce page
* Apex controller class (common for LC and VF)
* Test class for the Apex controller class
* Lightning App page
* Tab for the Lightning App page
* Tab for the Visualforce page


## Japanese Note
ご使用のSalesforce組織に存在するオブジェクトの3桁のプレフィックスを一覧するプログラムですプログラムです。標準・カスタムの区別なく、組織に存在するすべてのオブジェクトを一覧します。
LightningコンポーネントとVisualforceページの両方を含んでいますが、お好きな方をご使用頂けます。