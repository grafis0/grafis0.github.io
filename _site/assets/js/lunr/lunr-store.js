var store = [{
        "title": "Lame HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Lame, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema. Explotación de samba 3.0.20. Reconocimiento y Enumeración En primer lugar, se comprueba la correcta conexión en la VPN con...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","Exploit","Linux"],
        "url": "http://localhost:4000/Lame/",
        "teaser":"http://localhost:4000/imagenes/Lame/lame_logo.png"},{
        "title": "Active HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Active, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema, en este caso es de directorio activo (smbmap,smbclient,crackmapexec). Obtención de contraseñas a través del archivo grupos.xlm de Group Policy...","categories": ["Write up","Hack The Box","Easy","Windows"],
        "tags": ["Enumeration","Active Directory","GPP","Kerboroast attack","Windows"],
        "url": "http://localhost:4000/Active/",
        "teaser":"http://localhost:4000/imagenes/Active/Active.png"},{
        "title": "Sauna HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Sauna, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema, en este caso es de directorio activo (smbmap, smbclient, crackmapexec, LDAP, Kerberos). Ataque ASRepRoast utilizando GetNPUsers.py. Enumeración de información...","categories": ["Write up","Hack The Box","Easy","Windows"],
        "tags": ["Enumeration","Active Directory","ASRepRoast","WinPEAS","Bloodhound","Sharphound.exe","DCSync attack","Pass the hash","Windows"],
        "url": "http://localhost:4000/Sauna/",
        "teaser":"http://localhost:4000/imagenes/Sauna/Sauna_logo.png"},{
        "title": "Return HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Return, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema. Vulnerar web de impresora. Utilización de burpsuite. Abuso de grupo Server Operators para escalar privilegios. Reconocimiento y Enumeración En...","categories": ["Write up","Hack The Box","Easy","Windows"],
        "tags": ["Enumeration","Printer","Burpsuite","Server Operators abuse","Windows"],
        "url": "http://localhost:4000/Return/",
        "teaser":"http://localhost:4000/imagenes/Return/return_logo.png"},{
        "title": "Timelapse HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Timelapse, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema, en este caso es de directorio activo (smbmap, smbclient, crackmapexec). Cracking de archivos ZIP protegidos. Cracking de archivos .PFX...","categories": ["Write up","Hack The Box","Easy","Windows"],
        "tags": ["Enumeration","Active Directory","ZIP Cracking","PFX Cracking","Openssl","Private key","LAPS","Windows"],
        "url": "http://localhost:4000/Timelapse/",
        "teaser":"http://localhost:4000/imagenes/timelapse/logo_timelapse.png"},{
        "title": "Validation HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Validation, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema. Uso de Burpsuite. SQL Injection. Utilización de SQL Injection para ganar acceso al sistema. Automatización de la intrusión en...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","Burpsuite","SQLi","Web","Scripting","Autopwn","Linux"],
        "url": "http://localhost:4000/Validation/",
        "teaser":"http://localhost:4000/imagenes/Validation/Validation_logo.png"},{
        "title": "Horizontall HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Horizontall, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema con nmap. Inspección de código fuente de página para encontrar subdominios. Fuzzing para encontrar directorios en página web. Vulnerabilidad...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","Fuzzing","Web","RCE","CMS","Port Forwarding","Exploit","Linux"],
        "url": "http://localhost:4000/Horizontall/",
        "teaser":"http://localhost:4000/imagenes/Horizontall/horizontall_logo.png"},{
        "title": "Jeeves HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Jeeves, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Fuzzing a un IIS. Utilización de la consola de jenkins para ganar acceso al sistema. Obtención credenciales a través de archivo .kdbx....","categories": ["Write up","Hack The Box","Easy","Windows"],
        "tags": ["Enumeration","Fuzzing","Web","Jenkins","kdbx","Pass the hash","Windows"],
        "url": "http://localhost:4000/Jeeves/",
        "teaser":"http://localhost:4000/imagenes/Jeeves/jeeves_logo.png"},{
        "title": "Love HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Love, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema y descubrimiento de directorios y subdominios. SSRF para encontrar información. Abuso del CMS voting system (vulnerable). Abuso del AlwaysInstallElevated...","categories": ["Write up","Hack The Box","Easy","Windows"],
        "tags": ["Enumeration","Web","SSRF","CMS","Autopwn","AlwaysInstallElevated","WinPEAS","Windowns"],
        "url": "http://localhost:4000/Love/",
        "teaser":"http://localhost:4000/imagenes/Love/love_logo.png"},{
        "title": "NodeBlog HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada NodeBlog, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Injección noSQL. XXE para leer archivos internos de la máquina. Ataque de desserialización en Node.js. Enumeración en MongoDB. Automatización de la intrusión...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","Web","noSQLI","XXE","Deserialized attack","Mongo","Autopwn","Linux"],
        "url": "http://localhost:4000/NodeBlog/",
        "teaser":"http://localhost:4000/imagenes/NodeBlog/node_logo.png"},{
        "title": "NunChucks HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada NunChucks, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema y subdominios. SSTI. AppArmor Bypass (Shebang). Automatización de la intrusión. Reconocimiento y Enumeración En primer lugar, se comprueba la...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","Web","SSTI","AppArmor Bypass","Autopwn","Linux"],
        "url": "http://localhost:4000/Nunchucks/",
        "teaser":"http://localhost:4000/imagenes/NunChucks/nun_logo.png"},{
        "title": "Bolt HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Bolt, la cual tiene una dificultad media. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema y subdominios Leaks de información sensible. SSTI (Jinja2). Enumeración de bases de datos (sqlite3, mysql). Utilización de linpeas.sh para...","categories": ["Write up","Hack The Box","Medium","Linux"],
        "tags": ["Enumeration","Information leakage","SSTI","SQLite3","MySQL","LinPEAS","GPG","Linux"],
        "url": "http://localhost:4000/Bolt/",
        "teaser":"http://localhost:4000/imagenes/Bolt/bolt_logo.png"},{
        "title": "Driver HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Driver, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Credenciales demasiado débiles. Utilización de archivo SCF malicioso. Captura y crackeo de hash NTLMV2. Explotación de PrintNigthmare (CVE-2021-1675) Reconocimiento y Enumeración En...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","Weak password","Printer","NTLMv2 cracking","CVE-2021-1675","PrintNigthmare","Exploit","WinPEAS","Linux"],
        "url": "http://localhost:4000/Driver/",
        "teaser":"http://localhost:4000/imagenes/Drive/driver_logo.png"},{
        "title": "GoodGames HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada GoodGames, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: SQLi basada en error. SSTI. Escaneo de puertos manual. Escape de contenedor. Utilización de contenedor para escalar privilegios. Reconocimiento y Enumeración En...","categories": ["Write up","Hack The Box","Easy","Linux"],
        "tags": ["Enumeration","SQLi","SSTI","Manual scanning","Docker","Linux"],
        "url": "http://localhost:4000/GoodGames/",
        "teaser":"http://localhost:4000/imagenes/GoodGames/good_logo.png"},{
        "title": "Chaos HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Chaos, la cual tiene una dificultad media. Para lograr vulnerarla realizaremos lo siguiente: Fuzzing de directorios web. Adivinar credenciales demasiado débiles. Utilización de claws-mail (abusando de email). Decrypt de un mensaje. Restricted bash bypass. Extracción...","categories": ["Write up","Hack The Box","Medium","Linux"],
        "tags": ["Enumeration","Web","Fuzzing","Weak password","Mail abusing","Restricted bash bypass","Extracting Credentials from browser","Linux"],
        "url": "http://localhost:4000/Chaos/",
        "teaser":"http://localhost:4000/imagenes/Chaos/chaos_logo.png"},{
        "title": "Dark hole 1 VulnHub Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de VulnHub llamada DarkHole 1, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema. Abuso de mala implementación de sesiones. Subida de archivo malicioso php a la web (extension filter bypass). Abuso de binario...","categories": ["Write up","VulnHub","Easy","Linux"],
        "tags": ["Enumeration","Abusing sesion system","Arbitrary file upload","Web","SUID","Path hijacking","Autopwn","Linux"],
        "url": "http://localhost:4000/DarkHole_1/",
        "teaser":"http://localhost:4000/imagenes/VulnHub/vulnhub_logo.png"},{
        "title": "Dark hole 2 VulnHub Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de VulnHub llamada DarkHole 2, la cual tiene una dificultad easy. Para lograr vulnerarla realizaremos lo siguiente: Reconocimiento del sistema. Enumeración de proyecto Git. SQLi. Local Port Forwarding utilizando ssh. Abuso de servidor web. Información fitrada (bash history). Abuso de...","categories": ["Write up","VulnHub","Easy","Linux"],
        "tags": ["Enumeration","Git","SQLi","Port Forwarding","Web","Information leakage","Abusing sudoers","Linux"],
        "url": "http://localhost:4000/DarkHole_2/",
        "teaser":"http://localhost:4000/imagenes/VulnHub/vulnhub_logo.png"},{
        "title": "Epsilon HTB Write-up",
        "excerpt":"Resumen Saludos, en esta oportunidad vamos a resolver la máquina de Hack The Box llamada Epsilon, la cual tiene una dificultad media. Para lograr vulnerarla realizaremos lo siguiente: Enumeración del sistema. Obtención de repositorio git. Enumeración de AWS. Descubrimiento de funciones lambda del servidor. Creación de un JWT. Bypass del...","categories": ["Write up","Hack The Box","Medium","Linux"],
        "tags": ["Enumeration","Web","SSTI","Git","Python","AWS","Cloud","Scheduled Job Abuse","Symlink","Linux"],
        "url": "http://localhost:4000/Epsilon/",
        "teaser":"http://localhost:4000/imagenes/Epsilon/Epsilon_logo.png"}]
