# Discord Bot für Serverstatusüberwachung

Dieser Discord-Bot überwacht den Status von verschiedenen Servern und zeigt Aktualisierungen in einem Discord-Channel an.

## Funktionen

### Serverstatusüberwachung

- Überwacht den Status mehrerer Server in regelmäßigen Abständen.
- Sendet alle 10 Minuten eine Anfrage an die konfigurierten Server, um deren Erreichbarkeit zu überprüfen.
- Zusammenfassung des Serverstatus (erreichbar oder nicht erreichbar) wird in einem Embed erstellt und in einen Discord-Channel gesendet.

## Konfiguration

1. Installiere die erforderlichen Abhängigkeiten mit `npm install discord.js axios`.

2. Füge deine Discord-Bot-Token im Code ein:

   ```javascript
   client.login('DEIN_BOT_TOKEN');
3. Füg die url in config.json ein
4. Gib den befehl node bot.js ein   
