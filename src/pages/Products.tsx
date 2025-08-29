/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { MapPin, Monitor, Lightbulb, Home, Leaf, HardHat, Download } from 'lucide-react'; // Import Download icon

// 1. DEFINE THE PRODUCT INTERFACE CONSISTENTLY ACROSS COMPONENTS
// This interface defines the structure of a single product object,
// ensuring it aligns with what ProductDetail.tsx expects.
interface Product {
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    additionalImageUrl?: string; // Optional for the second image
    videoUrl?: string; // Optional for the "Watch Video" link
    specifications?: [string, string][]; // Optional for the "General Specifications" table
    features?: string[]; // Optional for the "Features & Alarms" list
    additionalSpecs?: [string, string][]; // Optional for other tables like 'Features & Alarms' if structured as a table
}
const commonImageUrl = 'https://pictortelematics.com/images/1732280823_1727252776_G18%20pic.webp';
const g17hImageUrl = 'https://googleusercontent.com/file_content/0'; // Re-using the uploaded G17H image
const g17hAdditionalImageUrl = 'https://googleusercontent.com/file_content/0'; // Re-using the uploaded G17H additional image


const products: Product[] = [
    // --- Existing Products (Our Trackers) ---
    {
        title: 'PT06-GPS TRACKER',
        category: 'Our Trackers',
        description: "PT06 is a 4-wire device with GSM, GPS, built-in sensors, ACC detection, and remote cutoff. It offers precise real-time tracking, geo-fencing, and over-speed alerts.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM/GPRS'],
            ['GPS Accuracy', '<10m'],
            ['Battery', '150 mAh (internal)'],
            ['Dimensions', '97mm x 51mm x 15mm']
        ],
        features: [
            'ACC Detection',
            'Remote Cut-off',
            'Geo-fence',
            'Precise Real-time Tracking',
            'Over-speed Alerts',
            'Built-in Sensors'
        ],
    },
    {
        title: 'G17H - GPS TRACKER',
        category: 'Our Trackers',
        description: "G17H is a 4-wire GPS tracker with GSM, ACC detection, and anti-theft alarm. Ideal for personal vehicles, providing real-time location and security alerts.",
        imageUrl: g17hImageUrl, // Specific image for G17H
        additionalImageUrl: g17hAdditionalImageUrl, // Specific additional image for G17H
        videoUrl: '#', // Placeholder for video link
        specifications: [
            ['Type', '4-wire GPS tracker'],
            ['Connectivity', 'GSM'],
            ['Features', 'ACC detection'],
        ],
        features: [
            'Anti-theft alarm',
            'ACC detection',
            'Real-time location',
            'Security alerts',
            'Compact design',
            'Easy installation'
        ],
        additionalSpecs: [
            ['Alarm', 'Anti-theft'],
            ['Application', 'Vehicle Security'],
        ]
    },
    {
        title: 'G19H-GPS TRACKER',
        category: 'Our Trackers',
        description: "A compact, IP67 waterproof 2G GPS tracker perfect for all-weather vehicle use. Designed for motorcycles and scooters, offering robust tracking in harsh conditions.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM/GPRS'],
            ['Waterproof', 'IP67'],
            ['Battery', '100 mAh (internal)'],
            ['Weight', '40g']
        ],
        features: [
            'IP67 Waterproof',
            'All-weather use',
            'Robust tracking',
            'Vibration Alarm',
            'Power Off Alarm',
            'Suitable for Motorcycles and Scooters'
        ],
    },
    {
        title: 'PT18 - GPS TRACKER',
        category: 'Our Trackers',
        description: "Monitors driver behavior with alerts for rapid acceleration, sharp turns, and collisions. This advanced tracker helps improve driving safety and reduce fuel consumption.",
        imageUrl: commonImageUrl,
        videoUrl: '#', // Placeholder for video link
        specifications: [
            ['Network', '2G/3G/4G (LTE)'],
            ['Sensors', 'Accelerometer, Gyroscope'],
            ['Data Storage', '16MB internal'],
            ['Reporting', 'Detailed driving reports']
        ],
        features: [
            'Driver Behavior Monitoring',
            'Rapid Acceleration Alerts',
            'Sharp Turn Alerts',
            'Collision Detection',
            'Improved Driving Safety',
            'Reduced Fuel Consumption'
        ],
    },
    {
        title: 'PS07 GPS TRACKER with Temperature Sensor',
        category: 'Our Trackers',
        description: "A smart 2G GPS device with a built-in temperature sensor for logistics. Essential for monitoring temperature-sensitive cargo like pharmaceuticals or food.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['Temp. Range', '-40°C to +85°C'],
            ['Power Input', '9-90V DC'],
            ['Alerts', 'Temperature Threshold Alerts']
        ],
        features: [
            'Built-in Temperature Sensor',
            'Temperature Monitoring',
            'Real-time Temperature Alerts',
            'Ideal for Cold Chain Logistics',
            'Supports Pharmaceuticals and Food Transport'
        ],
    },
    {
        title: 'PS03 GPS TRACKER with AC and Door Detection',
        category: 'Our Trackers',
        description: "An advanced 2G GPS tracker with integration for door and AC detection. Perfect for fleet management, ensuring cargo safety and monitoring vehicle usage.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['Inputs', 'Digital Inputs (for AC/Door)'],
            ['Relay Control', 'Yes'],
            ['Firmware', 'OTA updates supported']
        ],
        features: [
            'AC Detection',
            'Door Open/Close Detection',
            'Cargo Safety Monitoring',
            'Vehicle Usage Monitoring',
            'Remote Immobilization',
            'Geo-fence Alerts'
        ],
    },
    {
        title: 'G17S GPS TRACKER with SOS and Voice Monitoring',
        category: 'Our Trackers',
        description: "A 2G GPS device that connects with an SOS button and a microphone. Designed for personal safety and family tracking, allowing two-way communication in emergencies.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['Battery', '300 mAh'],
            ['Audio', 'Built-in Mic & Speaker'],
            ['Alerts', 'SOS Emergency Call']
        ],
        features: [
            'SOS Button',
            'Voice Monitoring',
            'Two-way Communication',
            'Personal Safety',
            'Family Tracking',
            'Geo-fence Alert'
        ],
    },
    {
        title: 'PT20 MAGNETIC GPS TRACKER',
        category: 'Our Trackers',
        description: "A self-sufficient 2G battery-powered device with a strong magnet. Ideal for covert tracking of assets, trailers, or containers without external power.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM/GPRS'],
            ['Battery', '5000 mAh (rechargeable)'],
            ['Standby Time', 'Up to 90 days'],
            ['Magnet', 'Strong Magnetic Mount']
        ],
        features: [
            'Strong Magnetic Mount',
            'Battery-powered (self-sufficient)',
            'Covert Tracking',
            'Tamper Alert',
            'Low Battery Alarm',
            'No Wiring Required'
        ],
    },
    {
        title: 'PT08 MAGNETIC ASSET TRACKER',
        category: 'Our Trackers',
        description: "Wireless 2G tracking device with a 10000mAh battery for logistics. Long-lasting power makes it suitable for long-term tracking of valuable mobile assets.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM/GPRS'],
            ['Battery', '10000 mAh'],
            ['Standby Time', 'Up to 180 days'],
            ['Positioning', 'GPS + LBS']
        ],
        features: [
            '10000mAh Battery',
            'Wireless Tracking',
            'Long-term Tracking',
            'Sleep Mode for Power Saving',
            'Vibration Alarm',
            'Suitable for Containers, Trailers, Construction Equipment'
        ],
    },
    {
        title: 'PT 30 ASSET TRACKER',
        category: 'Our Trackers',
        description: "A wireless 2G battery-powered device with a powerful magnet. Compact and robust, designed for versatile asset tracking in various environments.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['Battery', '6000 mAh'],
            ['Dimensions', '78mm x 45mm x 22mm'],
            ['Sensors', 'Built-in Accelerometer']
        ],
        features: [
            'Powerful Magnet',
            'Wireless Battery-powered',
            'Compact and Robust',
            'Geo-fence',
            'Route Playback',
            'Magnetic & Screw Mounting Options'
        ],
    },
    {
        title: 'PS21A OBD GPS TRACKER',
        category: 'Our Trackers',
        description: "A small, easy-to-install 2G in-vehicle OBD positioning device. Simply plug into the OBD port for instant tracking and basic vehicle diagnostics.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM/GPRS'],
            ['Power', 'OBD-II Port'],
            ['Installation', 'Plug & Play'],
            ['Voltage', '9-36V DC']
        ],
        features: [
            'Plug & Play Installation',
            'OBD Port Powered',
            'Instant Tracking',
            'Basic Vehicle Diagnostics',
            'Vibration Alarm',
            'Remote Diagnosis'
        ],
    },
    {
        title: 'PS21 OBD2 GPS TRACKER',
        category: 'Our Trackers',
        description: "A 2G in-vehicle OBD device for remote tracking and vehicle diagnosis. Offers more advanced diagnostic features and real-time alerts.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['OBD Functions', 'Read DTCs, Fuel Consumption'],
            ['Alerts', 'High RPM, Harsh Braking'],
            ['Firmware', 'Remote Upgrade']
        ],
        features: [
            'Remote Tracking',
            'Advanced Vehicle Diagnosis',
            'Real-time Alerts',
            'Vehicle Health Report',
            'Driver Behavior Analysis',
            'Real-time OBD data streaming'
        ],
    },
    {
        title: 'PS25 OBD GPS TRACKER',
        category: 'Our Trackers',
        description: "A small 2G OBD positioning device for electronic fence and remote tracking. Compact design, easy to conceal, and provides reliable tracking.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['Dimensions', '45mm x 25mm x 20mm'],
            ['Geo-fence', 'Circle/Polygon Geo-fence'],
            ['Sleep Mode', 'Intelligent Sleep']
        ],
        features: [
            'Electronic Fence',
            'Remote Tracking',
            'Compact Design',
            'Easy to Conceal',
            'Reliable Tracking',
            'Vibration Alarm',
            'Power Cut Alarm'
        ],
    },
    {
        title: 'PT-ID 02',
        category: 'Our Trackers',
        description: "A reliable 2G ID Card personal tracker with 2-way communication and SOS. Designed for personal safety, ideal for children, elderly, or field staff.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['Battery', '1000 mAh'],
            ['Dimensions', '85mm x 55mm x 6.5mm (Card size)'],
            ['Communication', 'Two-way Voice Calls']
        ],
        features: [
            '2-way Communication',
            'SOS Button',
            'Personal Safety',
            'Voice Monitoring',
            'Fall Detection',
            'GPS + LBS + Wi-Fi Positioning'
        ],
    },
    {
        title: 'PT 18(4G) GPS TRACKER',
        category: 'Our Trackers',
        description: "Advanced 4G tracker with ACC detection and remote fuel cut-off. Offers high-speed data transmission for real-time monitoring and control.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE/2G GSM'],
            ['Voltage', '9-90V DC'],
            ['ACC Detection', 'Yes'],
            ['Remote Control', 'Fuel/Power Cut-off']
        ],
        features: [
            'Advanced 4G Tracking',
            'ACC Detection',
            'Remote Fuel Cut-off',
            'High-speed Data Transmission',
            'Real-time Monitoring',
            'Multiple Alarms',
            'Geo-fence',
            'Route Playback'
        ],
    },
    {
        title: 'GS 900 (2G+4G) GPS TRACKER',
        category: 'Our Trackers',
        description: "Smart GPS tracker that integrates 2G and 4G with a fallback function. Ensures continuous connectivity even in areas with limited 4G coverage.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE + 2G GSM (Dual Mode)'],
            ['Antenna', 'Internal GPS/GSM Antennas'],
            ['Sleep Mode', 'Deep Sleep for Power Saving'],
            ['Dimensions', '80mm x 45mm x 15mm']
        ],
        features: [
            '2G + 4G Integration',
            'Fallback Function',
            'Continuous Connectivity',
            'Vibration Alarm',
            'Over-speed Alarm',
            'ACC Detection',
            'Automatic 2G Fallback'
        ],
    },
    {
        title: 'PS10A (2G+4G) GPS TRACKER',
        category: 'Our Trackers',
        description: "An intelligent vehicle GPS tracker with 4G, Mic and SOS functions. Provides comprehensive fleet management and emergency response capabilities.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE + 2G GSM'],
            ['Audio', 'Built-in Microphone'],
            ['SOS Button', 'External SOS Button'],
            ['Fuel Sensor', 'Analog/Digital Fuel Sensor Input']
        ],
        features: [
            '4G Connectivity',
            'Built-in Microphone',
            'SOS Function',
            'Comprehensive Fleet Management',
            'Emergency Response Capabilities',
            'Remote Voice Monitoring',
            'Real-time Tracking',
            'Supports external sensors'
        ],
    },
    {
        title: 'PS10 B (4G) GPS TRACKER',
        category: 'Our Trackers',
        description: "A smart 4G vehicle tracker with BLE 5.0 sensor support and SOS. Enables integration with a wide range of Bluetooth Low Energy sensors for expanded monitoring.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Bluetooth', 'BLE 5.0 (for sensors)'],
            ['SOS', 'One-key SOS'],
            ['Geo-fence', 'Circle, Polygon']
        ],
        features: [
            '4G Vehicle Tracker',
            'BLE 5.0 Sensor Support',
            'SOS Button',
            'Driver Behavior Monitoring',
            'Temperature Sensor Support (BLE)',
            'Data Logging'
        ],
    },
    {
        title: 'PS 10 C (2G+4G) GPS TRACKER',
        category: 'Our Trackers',
        description: "Intelligent 4G GPS tracker with remote fuel cut-off and geo-fence alerts. A robust solution for fleet security and operational efficiency.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE + 2G GSM'],
            ['Fuel Cut-off', 'Remote Control'],
            ['Geo-fence', 'Entry/Exit Alerts'],
            ['Power Input', '9-90V DC']
        ],
        features: [
            'Intelligent 4G Tracking',
            'Remote Fuel Cut-off',
            'Geo-fence Alerts',
            'Fleet Security',
            'Operational Efficiency',
            'Multiple Alarms',
            'Real-time Tracking',
            'ACC Status Reports'
        ],
    },
    {
        title: 'TLD2 D BLE ENABLED 4G OBD2 GPS TRACKER',
        category: 'Our Trackers',
        description: "Plug & Play 4G OBDII tracker with CAN BUS reading and BLE support. Provides deep vehicle data and allows connectivity with BLE peripherals.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['OBD-II', 'CAN BUS Reading'],
            ['Bluetooth', 'BLE Enabled'],
            ['Data Points', 'Hundreds of OBD Parameters']
        ],
        features: [
            'Plug & Play',
            '4G OBDII Tracker',
            'CAN BUS Reading',
            'BLE Support',
            'Deep Vehicle Data',
            'Remote Diagnosis',
            'Fuel Economy Monitoring'
        ],
    },
    {
        title: 'PS22 4G GPS TRACKER',
        category: 'Our Trackers',
        description: "A 4G vehicle OBD positioning device with vehicle diagnosis features. Compact, high-performance, and essential for modern vehicle monitoring.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['OBD', 'Diagnostic Capabilities'],
            ['Dimensions', '50mm x 30mm x 25mm'],
            ['Power Supply', 'Vehicle OBD-II']
        ],
        features: [
            '4G OBD Positioning',
            'Vehicle Diagnosis Features',
            'Compact and High-performance',
            'Real-time Alerts',
            'Engine Fault Code Reading',
            'FOTA (Firmware Over-The-Air) Updates'
        ],
    },
    {
        title: 'PT08A 4G MAGNETIC ASSET TRACKER',
        category: 'Our Trackers',
        description: "A self-sufficient 4G battery-powered device with a 10000mAh battery. Provides long-term, high-speed tracking for remote assets.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Battery', '10000 mAh'],
            ['Standby Time', 'Up to 180 days (with deep sleep)'],
            ['Magnet', 'Strong Magnetic Base']
        ],
        features: [
            'Self-sufficient Battery Power',
            '10000mAh Battery',
            'Long-term Tracking',
            'High-speed 4G Connectivity',
            'Strong Magnetic Base',
            'Tamper Alert',
            'Light Sensor Alert'
        ],
    },
    {
        title: 'PT20 4G MAGNETIC ASSET TRACKER',
        category: 'Our Trackers',
        description: "Wireless 4G tracking device with a 6000mAh battery and strong magnet. Versatile and durable for various asset tracking applications.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Battery', '6000 mAh'],
            ['Dimensions', '80mm x 50mm x 30mm'],
            ['Waterproof', 'IP65']
        ],
        features: [
            'Wireless 4G Tracking',
            '6000mAh Battery',
            'Strong Magnet',
            'Versatile and Durable',
            'Vibration Alert',
            'Low Power Alarm',
            'Quick & Easy Magnetic Mount'
        ],
    },
    {
        title: '2G CONNECT01+ FOR ELECTRIC VEHICLES',
        category: 'Our Trackers',
        description: "A 2G BMS device combining a GPS tracker for EV battery safety. Provides essential data for battery health and location of electric vehicles.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['BMS Integration', 'Yes'],
            ['Battery Monitoring', 'Voltage, Current, Temp'],
            ['Data Reporting', 'Real-time EV data']
        ],
        features: [
            '2G BMS Device',
            'Integrated GPS Tracker',
            'EV Battery Safety',
            'Battery Health Monitoring',
            'Real-time EV Data',
            'Over-charge/Discharge Protection',
            'Cell Balancing'
        ],
    },
    {
        title: '4G CONNECT02+ FOR ELECTRIC VEHICLES',
        category: 'Our Trackers',
        description: "Advanced 4G BMS device with predictive maintenance for EV batteries. Offers high-precision data and analytics for optimal battery performance and longevity.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['BMS Integration', 'Advanced'],
            ['Predictive Maintenance', 'Battery Health Analytics'],
            ['Firmware', 'OTA Updates']
        ],
        features: [
            'Advanced 4G BMS Device',
            'Predictive Maintenance for EV Batteries',
            'High-precision Data',
            'Battery Performance Analytics',
            'Thermal Management',
            'Fault Diagnosis',
            'OTA Updates'
        ],
    },
    {
        title: '2G CONNECT01 FOR ELECTRIC VEHICLES',
        category: 'Our Trackers',
        description: "A basic 2G BMS device that combines a GPS tracker for EV batteries. Essential for fundamental tracking and battery status checks in electric vehicles.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['BMS Functions', 'Basic Monitoring'],
            ['GPS Accuracy', '<10m'],
            ['Power Input', 'EV Battery Power']
        ],
        features: [
            'Basic 2G BMS Device',
            'Integrated GPS Tracker',
            'Fundamental Tracking',
            'Battery Status Checks',
            'Location Tracking',
            'Battery Voltage Display',
            'Easy to integrate'
        ],
    },
    {
        title: '2G (PS11) FOR ELECTRIC VEHICLES',
        category: 'Our Trackers',
        description: "A 2G, RTOS-based device for EVs with remote immobilization. Provides efficient power management and critical security features for electric vehicles.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['OS', 'RTOS (Real-Time OS)'],
            ['Immobilization', 'Remote Cut-off'],
            ['Power Consumption', 'Optimized for EV']
        ],
        features: [
            'RTOS-based',
            'Remote Immobilization',
            'Efficient Power Management',
            'Anti-theft',
            'Over-speed Alarm',
            'SMS/GPRS Communication'
        ],
    },
    {
        title: '2G (PS26) FOR ELECTRIC VEHICLES',
        category: 'Our Trackers',
        description: "An IP65 resistant, Bluetooth supported 2G RTOS-based device for EVs. Durable and versatile, allowing connection to external Bluetooth sensors for comprehensive EV data.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM'],
            ['IP Rating', 'IP65 (Water/Dust Resistant)'],
            ['Bluetooth', 'Yes (for sensors)'],
            ['Operating Temp', '-30°C to +80°C']
        ],
        features: [
            'IP65 Resistant',
            'Bluetooth Supported',
            'Durable and Versatile',
            'Connection to External Bluetooth Sensors',
            'Multiple I/O',
            'Remote Diagnosis'
        ],
    },
    {
        title: 'T98 4G DUAL DASHCAM',
        category: 'Our Trackers',
        description: "4G dual dashcam with 24x7 remote video monitoring and 2-way calling. Essential for fleet managers to ensure driver safety and cargo security.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Cameras', 'Dual (Front & Cabin)'],
            ['Resolution', '1080P Full HD (Front)'],
            ['Storage', 'Up to 256GB TF Card']
        ],
        features: [
            '4G Dual Dashcam',
            '24x7 Remote Video Monitoring',
            '2-way Calling',
            'Driver Safety',
            'Cargo Security',
            'Live View',
            'Two-way Audio',
            'Parking Monitor'
        ],
    },
    {
        title: 'T98 AI DUAL CAMERA DASHCAM',
        category: 'Our Trackers',
        description: "AI-powered dual dashcam supporting up to 512GB TF cards. Features advanced AI algorithms for improved road safety and driver monitoring.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['AI Functions', 'ADAS (Advanced Driver-Assistance Systems), DMS (Driver Monitoring System)'],
            ['Storage', 'Max 512GB TF Card'],
            ['Resolution', 'Dual 1080P']
        ],
        features: [
            'AI-powered Dual Dashcam',
            'Up to 512GB TF Card Support',
            'Advanced AI Algorithms',
            'Improved Road Safety',
            'Driver Monitoring',
            'Lane Departure Warning',
            'Forward Collision Warning',
            'Fatigue Driving Warning',
            'Cloud Platform Integration'
        ],
    },
    {
        title: 'T98 AI BSJ DASHCAM (1+2)',
        category: 'Our Trackers',
        description: "An AI dashcam system with 2-channel 720p HD video and SOS. Provides real-time insights into driving behavior and immediate accident alerts.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Channels', '2-Channel Video (720p HD)'],
            ['SOS', 'Emergency Button'],
            ['Viewing Angle', 'Wide Angle Lens']
        ],
        features: [
            'AI Dashcam System',
            '2-channel 720p HD Video',
            'SOS Button',
            'Real-time Driving Behavior Insights',
            'Immediate Accident Alerts',
            'G-Sensor',
            'Loop Recording',
            'Parking Monitoring'
        ],
    },
    {
        title: 'T98 AI - BSJ DASHCAM (1+3)',
        category: 'Our Trackers',
        description: "A 4-channel AI dashcam system with ADAS & DMS and loop recording. Comprehensive monitoring for large vehicles, ensuring all angles are covered.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Channels', '4-Channel Video (customizable resolutions)'],
            ['AI', 'ADAS & DMS'],
            ['Storage', 'Supports dual SD cards']
        ],
        features: [
            '4-channel AI Dashcam',
            'ADAS & DMS',
            'Loop Recording',
            'Comprehensive Monitoring for Large Vehicles',
            'Blind Spot Monitoring',
            '360-degree View (with external cams)',
            'Remote Access'
        ],
    },
    {
        title: 'T98 AI DASHCAM',
        category: 'Our Trackers',
        description: "An AI dashcam with remote video monitoring and night vision. Enhanced security and visibility for vehicles, day and night.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['AI', 'Object Detection, Pedestrian Warning'],
            ['Night Vision', 'IR LED for Cabin Cam'],
            ['Remote Access', 'Live Streaming, Video Download']
        ],
        features: [
            'AI Dashcam',
            'Remote Video Monitoring',
            'Night Vision (IR LED)',
            'Enhanced Security and Visibility',
            'Object Detection',
            'Pedestrian Warning',
            'Cloud Storage',
            'Event Triggered Recording'
        ],
    },
    {
        title: '4G CAM GPS TRACKER',
        category: 'Our Trackers',
        description: "An IP67 rated 4G camera and GPS tracker in one with AI human detection. Versatile for both vehicle and asset security, providing visual verification.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Camera', 'Built-in HD Camera'],
            ['GPS', 'Integrated GPS Module'],
            ['AI', 'Human Detection, Motion Detection']
        ],
        features: [
            'IP67 Rated',
            '4G Camera and GPS Tracker',
            'AI Human Detection',
            'Vehicle and Asset Security',
            'Visual Verification',
            'Two-way Audio',
            'Alarm Push Notification',
            'Waterproof & Dustproof'
        ],
    },
    {
        title: 'GL 600 E-LOCK',
        category: 'Our Trackers',
        description: "A 2G intelligent e-lock with dual SIM connectivity and multiple unlock methods. Provides robust security for containers and valuable cargo during transit.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM (Dual SIM)'],
            ['Unlock Methods', 'RFID, Bluetooth, SMS, Platform'],
            ['Battery', '15000 mAh (Long Lasting)'],
            ['Alerts', 'Tamper, Lock Status, Geo-fence']
        ],
        features: [
            '2G Intelligent E-lock',
            'Dual SIM Connectivity',
            'Multiple Unlock Methods (RFID, Bluetooth, SMS, Platform)',
            'Robust Security for Containers',
            'Cargo Security during Transit',
            'Real-time Tracking',
            'Remote Lock/Unlock'
        ],
    },
    {
        title: 'T-98E 4G E LOCK',
        category: 'Our Trackers',
        description: "A 4G e-lock with an OLED screen, supporting Bluetooth, password, and RFID. High-tech security solution for diverse logistics and asset protection needs.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Display', 'OLED Screen'],
            ['Unlock Methods', 'Bluetooth, Password, RFID Card'],
            ['Battery', '20000 mAh']
        ],
        features: [
            '4G E-lock',
            'OLED Screen',
            'Bluetooth Support',
            'Password Unlock',
            'RFID Unlock',
            'High-tech Security Solution',
            'Access Logs',
            'Real-time Alerts',
            'GPS Tracking',
            'Robust Anti-cut Design'
        ],
    },
    {
        title: '(GL 400) E-LOCK',
        category: 'Our Trackers',
        description: "A sub e-lock with a 10000mAh battery, BLE5.2, and a temperature sensor. Ideal for monitoring sensitive cargo in conjunction with a master lock or gateway.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', 'BLE 5.2 (sub-lock, requires gateway)'],
            ['Battery', '10000 mAh'],
            ['Sensor', 'Built-in Temperature Sensor'],
            ['Weight', 'Compact & Lightweight']
        ],
        features: [
            'Sub E-lock',
            '10000mAh Battery',
            'BLE5.2 Connectivity',
            'Built-in Temperature Sensor',
            'Monitoring Sensitive Cargo',
            'Tamper Alert'
        ],
    },
    {
        title: '(PL1800) 4G E LOCK',
        category: 'Our Trackers',
        description: "A smart 4G e-lock with a massive 18000mAh battery. Designed for extended deployments and maximum security for long-haul transportation.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '4G LTE'],
            ['Battery', '18000 mAh (Ultra-long endurance)'],
            ['Positioning', 'GPS + LBS'],
            ['Alerts', 'Door Status, Unauthorized Opening']
        ],
        features: [
            'Smart 4G E-lock',
            'Massive 18000mAh Battery',
            'Extended Deployments',
            'Maximum Security',
            'Long-haul Transportation',
            'Remote Control',
            'Historical Route Playback',
            'High-strength alloy body'
        ],
    },
    {
        title: 'PL600 SOLAR E-LOCK',
        category: 'Our Trackers',
        description: "A 2G e-lock powered by a solar panel, featuring dual SIMs. Self-sustaining for long-term outdoor deployments, reducing maintenance needs.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Network', '2G GSM (Dual SIM)'],
            ['Power Source', 'Solar Panel + Internal Battery'],
            ['Battery', 'Rechargeable internal battery'],
            ['Alerts', 'Solar Power Status, Tamper']
        ],
        features: [
            'Solar Powered',
            '2G E-lock',
            'Dual SIMs',
            'Self-sustaining',
            'Long-term Outdoor Deployments',
            'Reduced Maintenance Needs',
            'Continuous Operation'
        ],
    },
    {
        title: 'FUEL LEVEL SENSOR : STRELA WS',
        category: 'Our Trackers',
        description: "A wireless fuel level sensor with a powerful battery and Bluetooth. Provides accurate and reliable fuel monitoring without complex wiring.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Connectivity', 'Bluetooth Low Energy (BLE)'],
            ['Battery', 'Long-lasting internal battery'],
            ['Accuracy', 'High Precision Fuel Measurement'],
            ['Installation', 'Wireless, Easy Setup']
        ],
        features: [
            'Wireless Fuel Level Sensor',
            'Powerful Battery',
            'Bluetooth Connectivity',
            'Accurate Fuel Monitoring',
            'Reliable Fuel Monitoring',
            'No Complex Wiring',
            'Fuel Drain Alerts',
            'Refill Detection'
        ],
    },
    {
        title: 'STRELA WD WIRELESS FUEL LEVEL SENSOR',
        category: 'Our Trackers',
        description: "A secure wireless fuel sensor with Master-Slave mode operation. Ensures data integrity and reliable communication in complex fleet setups.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Connectivity', 'Wireless (proprietary protocol)'],
            ['Modes', 'Master-Slave Operation'],
            ['Security', 'Encrypted Data Transmission'],
            ['Measurement', 'Capacitive Sensing']
        ],
        features: [
            'Secure Wireless Fuel Sensor',
            'Master-Slave Mode Operation',
            'Data Integrity',
            'Reliable Communication',
            'Anti-jamming',
            'High Resolution',
            'Suitable for Fuel Tank Monitoring, Generators'
        ],
    },
    {
        title: 'STRELA D485 FUEL LEVEL SENSOR',
        category: 'Our Trackers',
        description: "A robust and wide-ranging fuel level sensor with easy setup. Connects via RS485 for reliable wired communication in industrial applications.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Interface', 'RS485'],
            ['Length', 'Customizable, up to 1500mm'],
            ['Voltage', '9-36V DC'],
            ['Accuracy', '±1%']
        ],
        features: [
            'Robust Fuel Level Sensor',
            'Wide-ranging',
            'Easy Setup',
            'RS485 Connectivity',
            'Reliable Wired Communication',
            'Temperature Compensation',
            'Anti-theft of Fuel'
        ],
    },
    {
        title: 'CLS2 FUEL LEVEL SENSOR',
        category: 'Our Trackers',
        description: "A high-accuracy fuel level sensor with customizable length. Ideal for precise fuel monitoring in various vehicle types and tanks.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Output', 'Analog/Digital'],
            ['Length', 'Customizable from 100mm to 1000mm'],
            ['Resolution', 'High Resolution'],
            ['Calibration', 'Easy Calibration']
        ],
        features: [
            'High-accuracy Fuel Level Sensor',
            'Customizable Length',
            'Precise Fuel Monitoring',
            'Analog/Digital Output',
            'Anti-corrosion',
            'Wide Operating Temperature',
            'Suitable for Trucks, Buses, Construction Machinery'
        ],
    },

    // --- NEW PRODUCTS FROM PDF ---
    {
        title: 'AquaSafe - Pond Monitoring System',
        category: 'Smart Monitoring Systems',
        description: "An IoT-enabled pond monitoring system designed to measure dissolved oxygen, pH, ammonia, and turbidity levels in real time. AquaSafe helps aquaculture businesses boost productivity and maintain optimal water quality for healthier yields",
        imageUrl: commonImageUrl,
        specifications: [
            ['System Type', 'IoT-enabled'],
            ['Monitored Parameters', 'Dissolved Oxygen, pH, Ammonia, Turbidity'],
            ['Monitoring Frequency', 'Real-time']
        ],
        features: [
            'Boosts aquaculture productivity',
            'Maintains optimal water quality',
            'Ensures healthier yields',
            'Real-time data insights'
        ],
    },
    {
        title: 'Locate360 - Fleet Management Solution',
        category: 'Our Trackers', // Changed to 'Our Trackers' as requested for "All Trackers" context
        description: "A complete fleet management solution integrating GPS tracking, real-time image capture, driver behavior analysis, and a live monitoring dashboard. Ideal for logistics, transport, and public service vehicle tracking.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Core Functions', 'GPS Tracking, ImageCapture, Driver Behavior Analysis'],
            ['Interface', 'Live Monitoring Dashboard'],
            ['Target Industries', 'Logistics, Transport, Public Service']
        ],
        features: [
            'Real-time image capture',
            'Driver behavior analysis',
            'Live monitoring dashboard',
            'Comprehensive fleet management',
            'Enhanced security for vehicles and cargo'
        ],
    },
    {
        title: 'CCMS - Smart Streetlight Management',
        category: 'Urban Infrastructure Solutions',
        description: "A smart streetlight management platform using 2.5G/4G connectivity through feeder panels for real-time monitoring and automation. Designed to reduce energy consumption and streamline urban infrastructure control.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Connectivity', '2.5G/4G'],
            ['Control Method', 'Feeder Panels'],
            ['Functionality', 'Real-time Monitoring & Automation']
        ],
        features: [
            'Reduces energy consumption',
            'Streamlines urban infrastructure control',
            'Real-time streetlight management',
            'Automated lighting control'
        ],
    },
    {
        title: 'Home Automation System',
        category: 'Smart Living Solutions',
        description: "A smart living ecosystem featuring motion sensors, surveillance cameras, thermostats, and connected devices — all controlled via a central hub. Enables secure, efficient, and intelligent living spaces.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Components', 'Motion Sensors, Surveillance Cameras, Thermostats, Connected Devices'],
            ['Control', 'Central Hub'],
            ['Benefits', 'Secure, Efficient, Intelligent Living']
        ],
        features: [
            'Integrated control of smart devices',
            'Enhanced home security (surveillance, motion sensors)',
            'Energy efficiency (thermostats)',
            'Intelligent living spaces',
            'User-friendly central control'
        ],
    },
    {
        title: 'Air Quality Monitor (LoRa-based)',
        category: 'Environmental Monitoring',
        description: "A LoRa-based wireless monitoring system designed for industrial and public safety applications. It accurately detects CO, CO₂, and NOx levels with a range of up to 900m, enabling real-time air quality insights in urban, agricultural, and remote areas.",
        imageUrl: commonImageUrl,
        specifications: [
            ['Technology', 'LoRa-based Wireless'],
            ['Detected Gases', 'CO, CO₂, NOx'],
            ['Range', 'Up to 900m'],
            ['Application', 'Industrial, Public Safety, Urban, Agricultural, Remote Areas']
        ],
        features: [
            'Accurate gas detection',
            'Long-range wireless monitoring',
            'Real-time air quality insights',
            'Suitable for diverse environments (urban, agricultural, remote)',
            'Enhances public safety'
        ],
    },
    {
        title: 'PCB Design & Fabrication Services',
        category: 'Services',
        description: "We provide end-to-end PCB design and fabrication services for embedded and IoT solutions. From schematic capture and layout to prototype fabrication, our PCBs meet high-performance standards for durability, precision, and manufacturability.",
        imageUrl: commonImageUrl, // Placeholder image
        specifications: [
            ['Service Type', 'End-to-end PCB Design & Fabrication'],
            ['Solutions', 'Embedded and IoT'],
            ['Process', 'Schematic Capture, Layout, Prototype Fabrication'],
            ['Standards', 'High-performance, Durability, Precision, Manufacturability']
        ],
        features: [
            'Comprehensive PCB solutions',
            'Focus on durability and precision',
            'Designed for manufacturability',
            'Supports embedded and IoT projects',
            'From concept to prototype'
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
};

const ProductsPage = () => { // Renamed from App to ProductsPage for clarity
    const [searchParams, setSearchParams] = useSearchParams();
    // Default to 'Our Trackers' since 'All Products' category is removed
    const selectedCategory = searchParams.get('category') || 'Our Trackers';

    const handleCategoryClick = (categoryId: string) => {
        setSearchParams({ category: categoryId });
    };

    // Dynamically get unique categories from the products data
    const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

    const categories = [
        // Removed: { id: 'all', label: 'All Products', icon: MapPin }, 
        { id: 'Our Trackers', label: 'Our Trackers', icon: MapPin }, // Explicitly include Our Trackers
        ...uniqueCategories
            .filter(cat => cat !== 'Our Trackers') // Filter out 'Our Trackers' to avoid duplication
            .map(cat => {
                let icon;
                switch (cat) {
                    case 'Smart Monitoring Systems':
                        icon = Monitor;
                        break;
                    case 'Urban Infrastructure Solutions':
                        icon = Lightbulb;
                        break;
                    case 'Smart Living Solutions':
                        icon = Home;
                        break;
                    case 'Environmental Monitoring':
                        icon = Leaf;
                        break;
                    case 'Services':
                        icon = HardHat;
                        break;
                    default:
                        icon = MapPin; // Default icon
                }
                return { id: cat, label: cat, icon: icon };
            })
            // Sort categories alphabetically by label, but keep "Our Trackers" at top
            .sort((a, b) => a.label.localeCompare(b.label))
    ];

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => product.category === selectedCategory);

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Products</span>
                    </h1>
                    <p className="text-gray-300 text-lg">Explore our comprehensive range of solutions.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
                    {/* Sidebar */}
                    <div className="bg-white/10 p-5 rounded-xl border border-white/10 space-y-4 backdrop-blur sticky top-20 self-start">
                        <h2 className="text-lg font-semibold text-white">Categories</h2>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <button
                                        onClick={() => handleCategoryClick(cat.id)}
                                        className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium w-full text-left transition-colors ${
                                            selectedCategory === cat.id
                                                ? 'bg-purple-500/30 text-white'
                                                : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                                        }`}
                                    >
                                        <cat.icon className="w-5 h-5 text-cyan-400" />
                                        <span>{cat.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* --- NEW SECTION FOR APP DOWNLOAD --- */}
                        <div className="pt-4 mt-4 border-t border-white/10">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.tracking.locatets"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium w-full text-left transition-colors text-gray-300 hover:text-white hover:bg-purple-500/10"
                            >
                                <Download className="w-5 h-5 text-cyan-400" />
                                <span>Download Our App</span>
                            </a>
                        </div>
                         {/* --- END NEW SECTION --- */}

                    </div>

                    {/* Products Grid */}
                    <section>
                        <AnimatePresence>
                            <motion.div
                                key={selectedCategory}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <motion.div
                                            key={product.title}
                                            variants={itemVariants}
                                            className="bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-purple-500/20 overflow-hidden shadow-lg hover:shadow-purple-500/25 hover:scale-[1.03] transition-all duration-300 flex flex-col h-full"
                                        >
                                            <div className="w-full h-48 overflow-hidden">
                                                <img
                                                    src={product.imageUrl}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => { e.currentTarget.src = commonImageUrl; }} // Fallback image
                                                />
                                            </div>
                                            <div className="p-4 flex flex-col flex-grow">
                                                <span className="bg-purple-600/30 px-2.5 py-1 rounded-full text-white text-xs w-fit mb-3">
                                                    {product.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-white mb-2">{product.title}</h3>
                                                <p className="text-gray-300 text-sm line-clamp-3 flex-grow mb-4">{product.description}</p>
                                                {/* "Get More Details" Link with Transparent Styling */}
                                                <Link
                                                    to={`/products/${encodeURIComponent(product.title)}`}
                                                    className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-purple-500 text-sm font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-purple-700/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 self-start"
                                                >
                                                    Get More Details
                                                </Link>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="col-span-full text-center text-gray-400 text-lg py-10"
                                    >
                                        No products found in this category.
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;