class DataValidator {
    fun validate(dataPoint: DataPoint): ValidationResult {
        if (dataPoint.value !in 0.0..100.0) {
            return ValidationResult(false, "Value must be between 0 and 100")
        }
        if (dataPoint.timestamp.after(LocalDateTime.now())) {
            return ValidationResult(false, "Timestamp cannot be in the future")
        }
        return ValidationResult(true)
    }
}