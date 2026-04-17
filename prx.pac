function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*rateyourmusic.com")) {
        return "PROXY 192.168.178.10:8888; DIRECT";
    }
    return "DIRECT";
}
