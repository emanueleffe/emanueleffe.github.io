function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "rateyourmusic.com") || shExpMatch(host, "*.rateyourmusic.com")) {
        
        // Try to resolve a domain that exists only on your local network
        var homeIp = dnsResolve("home.gia.da");
        
        // If it resolves to your local server, you are at home
        if (homeIp === "192.168.178.10") {
            return "PROXY 192.168.178.10:8888; DIRECT";
        }
        
        // Otherwise, skip the proxy to avoid TCP timeout delays
        return "DIRECT";
    }
    
    return "DIRECT";
}
