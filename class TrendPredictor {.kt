class TrendPredictor {
    fun predictTrend(dataPoints: List<DataPoint>): Trend {
        val values = dataPoints.map { it.value }
        val mean = values.average()
        val stdDev = values.stdDev()
        return if (values.count { it > mean + stdDev } > values.size / 2) {
            Trend.UP
        } else if (values.count { it < mean - stdDev } > values.size / 2) {
            Trend.DOWN
        } else {
            Trend.FLAT
        }
    }
}