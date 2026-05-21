function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "rateyourmusic.com") || shExpMatch(host, "*.rateyourmusic.com")) {
        
        if (isResolvable("proxy.gia.da")) {
            return "PROXY proxy.gia.da:8888; DIRECT";
        }
        
        return "DIRECT";
    }
    
    return "DIRECT";
}
