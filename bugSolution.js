Here's the corrected code using a unique identifier (assuming your data has a unique `id` field):

```javascript
<FlatList
  data={[{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }]}
  keyExtractor={(item) => item.id.toString()} // Correct: Unique keys
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

**Important Considerations:**

* **Uniqueness:**  The `keyExtractor` *must* return a unique string for each item.  Even if your data has an ID field that's a number, convert it to a string using `toString()`.
* **Stability:** The key should remain constant for the lifetime of the item.  Do not use keys that might change (e.g., a calculated value or a user-input field).
* **Performance:** Using a stable and efficient `keyExtractor` function will improve the performance of your `FlatList` significantly.