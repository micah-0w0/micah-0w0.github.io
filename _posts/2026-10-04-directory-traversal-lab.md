---
layout: post
title: Directory Traversal Lab
tags:
  - writeup
description: >
  Conducted directory traversal testing against a web server, developed a Snort rule to detect traversal attempts, and proposed remediation strategies to mitigate the vulnerability.
overlay: red
published: true
---

# Directory Traversal Security Assessment (Educational Lab Environment)

## Overview

As part of a cybersecurity training exercise, I performed a security assessment of a web-based file server. The objective was to identify vulnerabilities, assess potential business impact, analyze network traffic associated with exploitation, develop detection logic, and recommend mitigations.

This assessment was conducted entirely within a controlled educational lab environment.

## Risk Rating

**Severity: High**

The application was vulnerable to a directory traversal attack that allowed unauthorized access to files outside the intended file-sharing directory. Successful exploitation exposed operating system information, credential-related files, and confidential business data.

---

## Vulnerability Summary

The application accepted user-supplied file paths without validating whether requests remained within the authorized FTP directory. By supplying traversal sequences such as `../`, an attacker could access arbitrary files on the host system.

### Example Traversal Requests

`http://localhost:8888/../../../etc/os-release`

`http://localhost:8888/../../../etc/shadow`

`http://localhost:8888/../../../opt/wishful-thinking/real_earnings.txt`

---

## Findings

### 1. Host Operating System Information Disclosure

The traversal vulnerability allowed retrieval of the operating system release information.

**Recovered Information**

`Ubuntu 22.04.5 LTS`

**Impact**

Knowledge of the target operating system enables attackers to tailor exploitation attempts and identify version-specific vulnerabilities.

---

### 2. Unauthorized Access to Credential-Related Files

The application exposed the contents of the system's shadow password file through path traversal.

**Recovered Root Entry**

`root:*:20675:0:99999:7:::`

**Impact**

Exposure of authentication-related files can assist attackers in credential attacks and privilege escalation efforts.

---

### 3. Exposure of Confidential Business Information

The vulnerability also exposed sensitive financial information stored outside the application's intended directory structure.

**Recovered Data**

`Earnings are DOWN 16% this quarter.`

**Impact**

Disclosure of confidential business information could result in reputational damage, loss of competitive advantage, or regulatory concerns.

---

## Breach Scope Analysis

I analyzed the provided packet capture (`server.pcapng`) to determine which files were successfully accessed during the attack.

### Files Successfully Retrieved (HTTP 200 OK)

| File                               | Classification           |
| ---------------------------------- | ------------------------ |
| `/general/reports.txt`             | Authorized Directory     |
| `/general/budget.txt`              | Authorized Directory     |
| `/etc/os-release`                  | Unauthorized (Traversal) |
| `/etc/shadow`                      | Unauthorized (Traversal) |
| `/opt/northwind/real_earnings.txt` | Unauthorized (Traversal) |
| `/etc/passwd`                      | Unauthorized (Traversal) |

### Additional Observation

One request attempted to access:

`/nonexistent.txt`

The server correctly returned:

`HTTP/1.1 404 Not Found`

---

## Detection Engineering

To identify directory traversal attempts, I developed a custom Snort detection rule.

### Snort Rule

`alert tcp any any -> any 8888 ( msg:"Directory traversal (../ in a request)"; flow:to_server,established; content:"../"; sid:1000020; rev:1; )`

### Example Alert

`07/26-21:40:08.059778 [**] [1:1000020:1] "Directory traversal (../ in a request)" [**] [Priority: 0] {TCP} 127.0.0.1:59668 -> 127.0.0.1:8888`

### Results

`total_alerts: 4`

The rule successfully detected every traversal attempt contained in the packet capture.

---

## Remediation Recommendations

### Secure File Path Validation

The application should canonicalize and validate requested file paths before serving content. Any request that resolves outside the authorized directory should be denied.

Examples of recommended protections include:
- Path normalization before processing
- Directory allow-listing
- Least-privilege filesystem permissions
- Explicit rejection of traversal sequences such as `../`

### Defense in Depth

Deploy a Web Application Firewall (WAF) or intrusion detection solution capable of identifying and blocking directory traversal patterns, including both plain-text and URL-encoded variants.

Example encoded traversal pattern:

`%2e%2e%2f`

Although a WAF should not replace secure application logic, it can significantly reduce the likelihood of successful exploitation.

---

## Skills Demonstrated

- Web application security testing
- Directory traversal exploitation
- HTTP traffic analysis
- Packet capture (PCAP) investigation
- Snort rule development
- Incident scoping and impact assessment
- Security remediation planning
- Technical report writing

---

## Key Takeaway

This project demonstrated how a seemingly simple input-validation flaw can lead to the exposure of sensitive system and business data. Through exploitation, network analysis, detection engineering, and remediation planning, I was able to evaluate the full attack lifecycle and develop practical defensive measures against directory traversal attacks.