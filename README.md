# React Native FlatList: Inconsistent or Invalid `keyExtractor`

This repository demonstrates a common error encountered when using the `FlatList` component in React Native: an inconsistent or invalid `keyExtractor` function.  The `keyExtractor` function is vital for efficient rendering and updating of list items. If it does not return unique keys, unexpected behavior or crashes can occur.

## Problem

The provided `bug.js` file showcases an example where the `keyExtractor` function either uses non-unique keys or relies on a property that might change, leading to incorrect rendering and performance issues.  The `FlatList` might not update correctly, add, delete, or move items incorrectly, or even crash.

## Solution

The `bugSolution.js` file presents the corrected implementation, showing how to use a stable and unique key for each item, ideally a unique identifier from your data source (e.g., a database ID).