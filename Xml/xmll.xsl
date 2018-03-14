<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html>
<body>
<h2>Inventory Management</h2>
<table border="1">
<tr bgcolor="#9acd32">
<th style="text-align:left">name</th>
<th style="text-align:left">address</th>
<th style="text-align:left">telephone</th>
</tr>
<xsl:for-each select="orderform/customer">
<tr>
<td>
<xsl:value-of select="name"/>
</td>
<td>
<xsl:value-of select="address"/>
</td>
<td>
<xsl:value-of select="telephone"/>
    <td>
        <xsl:value-of select="mobile"/>
        <xsl:value-of select="home"/>
    </td>
</td>
</tr>
</xsl:for-each>
<xsl:for-each select="orderform/product">
<tr>
<td>
<xsl:value-of select="product_name"/>
</td>
<td>
<xsl:value-of select="number"/>
</td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>