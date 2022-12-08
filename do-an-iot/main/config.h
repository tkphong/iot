
#ifndef __CONFIG_H_
#define __CONFIG_H_

/**
 * Wi-Fi SSID
 */
#ifndef WIFI_SSID
#define WIFI_SSID "A1"
#endif

/**
 * Wi-Fi password
 */
#ifndef WIFI_PASSWORD
#define WIFI_PASSWORD "88889999"
#endif

/**
 * MQTT broker hostname or IP
 */
#ifndef MQTT_HOSTNAME
#define MQTT_HOSTNAME "mqtt.flespi.io"
#endif

/**
 * MQTT port
 */
#ifndef MQTT_PORT
#define MQTT_PORT 1883
#endif

/**
 * MQTT token - MQTT username
 */
// nho cap nhat token o ca 2 code
#ifndef MQTT_USERNAME
#define MQTT_USERNAME "FlespiToken lCG8yJPUWRc9awe3M2AaTuKcqd5N4Nvgd1cByPklwkiuGmogcOgW6QWmURXOujSx"
#endif                  

/**
 * Topic name for MQTT published
 */
// Nhap ten Topic muon pub len
#ifndef MQTT_TOPIC
#define MQTT_TOPIC "crawldata"
#endif

/**
 * Unique ID of this device in the system
 */

// Nhap Client ID
#ifndef DEVICE_ID
#define DEVICE_ID "b8jk2abf"
#endif

/**
 * Measurement period in ms
 */
#ifndef MEASUREMENT_INTERVAL
#define MEASUREMENT_INTERVAL 60000
#endif

/**
 * Offset in ms to measurement period calculated as: sample_utc_ms % MEASUREMENT_INTERVAL
 */
#ifndef MEASUREMENT_OFFSET
#define MEASUREMENT_OFFSET 0
#endif

#endif /* MAIN_CONFIG_H_ */