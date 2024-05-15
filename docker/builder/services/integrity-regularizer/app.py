# -*- coding: utf-8 -*-
#
# Copyright (C) 2021 GEO Secretariat.
#
# GEO Deposit React is free software; you can redistribute it and/or
# modify it under the terms of the MIT License; see LICENSE file for more
# details.

"""Integrity regularizer for GEO Knowledge Hub React packages."""

import json

#
# General definitions
#
REFERENCE_FILE = "package-lock.json"

#
# 1. Loading package dependencies
#
package_json = json.load(open(REFERENCE_FILE))

#
# 2. Getting dependencies
#
dependencies = package_json["dependencies"]
packages = package_json["packages"]

#
# 3. Removing dependencies from GEO Knowledge Hub packages installed from GitHub
#

# Packages
for depkey in packages.keys():
    if "@geo-knowledge-hub" in depkey and "integrity" in packages[depkey]:
        del packages[depkey]["integrity"]

# Dependencies
for depkey in dependencies.keys():
    if "@geo-knowledge-hub" in depkey and "integrity" in dependencies[depkey]:
        del dependencies[depkey]["integrity"]

#
# 4. Saving the modified result
#
json.dump(package_json, open(REFERENCE_FILE, "w"))
