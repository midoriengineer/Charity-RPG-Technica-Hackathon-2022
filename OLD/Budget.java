public class Budget {
    double percentDonate;
    double discretionarySpend;
    double essentialSpend;

    /*Creates a new Budget. User inputs the percentage of their discretionary
    income they want to donate. Essential and discretionary spending are
    initialized at 0.*/
    public Budget(double percentIn) {
        percentDonate = percentIn;
        essentialSpend = 0;
        discretionarySpend = 0;
    }

    /*Increases the amount of essential spending by the amount specified
    * by the user*/
    double addEssential(double spentAmount) {
        return essentialSpend+spentAmount;
    }

    /*Increases the discretionary spending by the amount specified by
    * the user*/
    double addDiscretionary(double spentAmount){
        return discretionarySpend+spentAmount;
    }

    /*Calculates the amount that the user should donate to charity.*/
    double amountToDonate() {
        double decimal = percentDonate/100;
        return discretionarySpend*decimal;
    }

    /*At the end of the month the budget resets.*/
    void reset () {
        percentDonate = 0;
        discretionarySpend = 0;
        essentialSpend = 0;
    }
}
