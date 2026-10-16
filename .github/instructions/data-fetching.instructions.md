---
description: This file provides instructions for data fetching in the project.
---
# Data fetching guidelines 
This document provides guidelines and best practices for fetching data in the project.

## 1. Use server component for data fetching 
In nest.js, ALWAYS using server components for data fetching. Never use client components to fetch data. 

## 2. Data fetching methods 
always use the helper functions in the /data directory to fetch data. Never fetch data directly in the components. 

All helper functions in the /data directoty should use Drizzle ORM for the database interactions.