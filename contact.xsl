<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Контактная информация</title>
      </head>
      <body>
        <h2>Контактная информация</h2>
        <xsl:for-each select="info/student">
          <div class="contact-info">
            <p><strong>Полное имя:</strong> <xsl:value-of select="fullname"/></p>
            <p><strong>Факультет:</strong> <xsl:value-of select="faculty"/></p>
            <p><strong>Курс:</strong> <xsl:value-of select="course"/></p>
            <p><strong>Группа:</strong> <xsl:value-of select="group"/></p>
            <p><strong>Телефон:</strong> <xsl:value-of select="phone"/></p>
            <p><strong>Email:</strong> <xsl:value-of select="email"/></p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
