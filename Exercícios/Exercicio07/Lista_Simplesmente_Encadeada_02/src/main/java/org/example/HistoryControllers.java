package org.example;

public class HistoryControllers {
    private BrowserHistory bH;
    public HistoryControllers(BrowserHistory bH){
        this.bH = bH;
    }

    public void addUrl(String url) {
        if (bH.history.size() >= bH.maxSize) {
         removeOldest();
        }
        bH.history.addLast(url);
    }

    public String removeOldest() {
        if(!bH.history.isEmpty()) {
            return bH.history.removeFirst();
        }
        return null;
    }

    public void showHistory() {
        if(bH.history.isEmpty()) {
            System.out.println("Histórico vazio...");
        } else {
            System.out.println("Histórico (limitado a 2):");
            for (String url : bH.history) {
                System.out.println(url);
            }
        }
    }
}
