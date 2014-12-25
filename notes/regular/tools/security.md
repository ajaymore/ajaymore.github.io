---
---

# Core principles
1. List previlege
> Every program and every previleged user of the system should operate using the least amount of previlege necessary to complete the job.
2. Simple is more secure: Do not keep any code available which won't be used.
3. Never trust users
4. Expect the unexpected: (Edge cases)
5. Defence in depth: Layered defense, multiple levels/layers of defence to slow down the attack and exhaust the attacker
6. Security through obscurity (Do not provide any unnecessary information, do not provide versions of your softwares) Be stingy about the information you give out. no unecessary id's etc. It does not mean obfuscation of your code.
7. Blacklisting and whitelisting: Previlege should be denied by default and only be given as a result of whitelisting.
8. Map exposure points and data passageways
### Incoming
 - URL
 - forms
 - Cookies/Sessions
 - Database Reads
 - public apis
### Outgoing
 - HTML
 - JSON/XML/RSS/JS etc
 - Cookies/Sessions
 - DB Write
 - Third party apis


 # Filter Input control output

 1. Regulate input: configure server for expected requests and data types
 2. Validating input, keep defaults which would be replaced by valid data
 	- length
 	- data type (int, string, bool, file-type)
 	- format (email)
 	- within range
 	- Uniqueness
 	- search for logic pit-falls of the languages
 3. Sanitize data: 
 	- Always use type casting, rather than depend upon language capability at type juggling
 	- use well tested, language-specific sanitizing methods. sanitize early, sanitize late, sanitize often. Sanitize for json, xml, html etc.
 4. Labelling data - (dirty, raw, tainted, unsafe) - (clean, filtered, sanitized, safe)
 5. Keeping code private (public dir for http server access) (All business informatin should be backstage)
 6. Keeping credentials private, password should have least number of previleged applications. SSH - private key is stored on computer, server sends a challange message encrypted with public key which can only be decoded by private key and the message is sent back, thus avoiding the passage of password.
 7. Keeping error messages vague. Provide minimum information in error messages
 8. Smart logging, error messages, sensitive actions not data, possible attacks
 	- Date and time
 	- Source user, IP address
 	- action
 	- target
 	- backtrace

 # Most common attacks
 1. Cross site scripting (XSS)
 	- inject js into page, steal cookies
 	- be cautious of data from urls, forms etc.
 2. Cross site request forgery (CSRF)
 	- Get requests should be idempotent, should never make any changes on the server
 	- use form tokens that are sent by valid source, and kept in session - hence ensuring that not just any form is submitted.
 3. SQL Injections
 	- Give limited access to application's database user, should not be able to create tables, drop tables or create databases.
 4. URL manipulations
 	- Manipulating urls to get information
 5. Faked requests and forms, fake forms and request cannot be overruled but use of server generated tokens can be of great use.
 6. Cookie visibility and theft
 	- only preference and non sensitive data
 	- use http only cookies, thus making javascript incapable of using it.
 	- set expiration to the cookies
 	- set cookie domain and path
 	- encrypting cookies if used at all for authentication
 7. Session Hijacking
 	- Save user agent in session
 	- keep IP address
 	- Use https only cookies
 	- Regenerate session ids at every login
 	- Use SSL
 8. Session Fixation
 	- giving user the already generated session id and hence sharing it with him
 	- do not send session ids over get or post, always send them via cookies
 	- regenerate session ids at key points
 	- remove old session files periodically, keep track of last session activity
 9. Remote system execution
 	- do not use system/os call functions in the programs
 	- if used it must be done with utmost caution, and only if you have thorough knowledge of what it does with the os
 10. File upload abuse
 	- limit maximum allowed size
 11. Denial of service
 	- Overloading server with requests (switch, router, firewalls, high-quality hardware)
 	- make network visible