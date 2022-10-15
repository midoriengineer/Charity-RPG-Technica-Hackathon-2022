public class Budget {
    double percentDonate;
    double discretionarySpend;
    double essentialSpend;

    public Budget(double percentIn) {
        percentDonate = percentIn;
        essentialSpend = 0;
        discretionarySpend = 0;
    }

    double addEssential(double spentAmount) {
        return essentialSpend+spentAmount;
    }

    double addDiscretionary(double spentAmount){
        return discretionarySpend+spentAmount;
    }

    double amountToDonate() {
        double decimal = percentDonate/100;
        return discretionarySpend*decimal;
    }

    void clear() {
        percentDonate = 0;
        discretionarySpend = 0;
        essentialSpend = 0;
    }
}
