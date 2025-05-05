# Trading Risk Simulation

A React-based trading simulation application that allows users to visualize and analyze different trading strategies using customizable parameters. The application simulates trading scenarios over a year period with configurable risk management settings.

## Technologies Used

- React
- TypeScript
- i18next
- Lucide React
- Tailwind CSS


## Usage

1. Set your initial trading parameters:
   - Starting balance (minimum $100)
   - Risk percentage (0.1% - 10%)
   - Risk-to-reward ratio
   - Maximum trades per day (1-10)

2. Click "Simulate" to start the trading simulation

3. Use the controls to:
   - Pause/Resume the simulation
   - Adjust simulation speed
   - Share results


## Trading Simulation Parameters

### Risk Management
- Risk per trade is calculated as a percentage of current balance
- Default risk is set to 2% per trade
- Maximum risk percentage is capped at 10%

### Win Rate Calculation
- Base win rate: 45%
- Trades are randomly generated based on maximum trades per day
- Win/loss streaks are tracked and analyzed

### Balance Updates
- Profits are calculated based on risk-reward ratio
- Losses are fixed to the risk amount
- Maximum drawdown is continuously monitored

