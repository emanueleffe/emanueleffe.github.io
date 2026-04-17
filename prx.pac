function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "rateyourmusic.com") || shExpMatch(host, "*.rateyourmusic.com")) {
        
        var homeIp = dnsResolve("home.gia.da");
        
        if (homeIp === "192.168.178.10") {
            return "PROXY 192.168.178.10:8888; DIRECT";
        }
        
        return "DIRECT";
    }
    
    return "DIRECT";
}
