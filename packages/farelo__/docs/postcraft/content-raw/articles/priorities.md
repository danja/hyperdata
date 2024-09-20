#priority #Priorities

## Values

- in UI, integers 1 (highest) to 9 (lowest)
- in UI, strings 'low', 'medium', 'high'
- in-code values, real numbers 0.0 (lowest) to 1.0 (highest)
- for a task, 0.0 means 'never do', 1.0 'drop everything, do it now!'

### Conversions

#### String to Value

- `high` => 2
- `medium` => 5
- `low` => 8

### Value to String

- 1 | 2 | 3 => `high`
- 4 | 5 | 6 => `medium`
- 7 | 8 | 9 => `low`
