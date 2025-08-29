/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useParams, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react'; // Import PlayCircle icon

// 1. DEFINE THE PRODUCT INTERFACE FIRST
// This interface defines the structure of a single product object.
// It MUST be defined before it's used by the 'products' array.
interface Product {
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    additionalImageUrl?: string; // Optional for the second image
    videoUrl?: string; // Optional for the "Watch Video" link
    specifications: [string, string][]; // For the "General Specifications" table
    features: string[]; // For the "Features & Alarms" list
    additionalSpecs?: [string, string][]; // Optional for other tables like 'Features & Alarms' if structured as a table
}

// --- CENTRALIZED PRODUCT DATA ---
// Now, 'Product' type is defined, so it can be used here without error.
// This array should ideally be in a separate data file (e.g., 'data/products.ts')
// but is placed here for a self-contained example.
// Make sure this matches the product data used in your Products.tsx listing page.

const commonImageUrl = 'https://pictortelematics.com/images/1732280823_1727252776_G18%20pic.webp';
// Using the uploaded image's accessible URL for G17H
const g17hImageUrl = 'https://googleusercontent.com/file_content/0';
const g17hAdditionalImageUrl = 'https://googleusercontent.com/file_content/0';


const products: Product[] = [
    // --- Your original products, now with a 'features' array and updated images/specs ---
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
    description:
      'G17H is a 4-wire GPS tracker with GSM, ACC detection, and anti-theft alarm. Ideal for personal vehicles, providing real-time location and security alerts.',
    imageUrl: g17hImageUrl,
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
      'Easy installation',
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
];


const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate(); // Initialize useNavigate
    const decodedId = id ? decodeURIComponent(id) : '';

    const product = products.find(p => p.title === decodedId);

    const handleGoBack = () => {
        navigate(-1); // Go back one step in history
    };

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-white text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent"
                >
                    404 - Product Not Found
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-8"
                >
                    The product you're looking for does not exist or has been moved.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button
                        onClick={handleGoBack} // Use the handleGoBack function
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
                    >
                        Go Back
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-20 pb-12 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 p-8 rounded-xl shadow-lg border border-purple-500/20 mb-10"
                >
                    {/* Universal Go Back Button */}
                    <button
                        onClick={handleGoBack} // Use the handleGoBack function
                        className="text-purple-400 hover:text-purple-300 transition-colors mb-6 inline-block text-lg font-medium"
                    >
                        ← Go Back
                    </button>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {product.title}
                    </h1>
                    <span className="bg-purple-600/30 px-3 py-1 rounded-full text-white text-sm font-medium mb-6 inline-block">
                        {product.category}
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl"
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.currentTarget.src = commonImageUrl; }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                {product.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {product.videoUrl && (
                                    <a
                                        href={product.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-5 py-2.5 bg-purple-600/30 hover:bg-purple-700/50 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                                    >
                                        <PlayCircle className="w-5 h-5 mr-2" /> Watch Video
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {product.additionalImageUrl && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 w-full h-80 rounded-lg overflow-hidden shadow-xl"
                        >
                            <img
                                src={product.additionalImageUrl}
                                alt={`${product.title} - additional view`}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.currentTarget.src = commonImageUrl; }}
                            />
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 p-6 bg-white/5 rounded-lg border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-4">General Specifications</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-purple-700/50">
                                <tbody className="bg-transparent divide-y divide-purple-700/50">
                                    {product.specifications.map(([key, value]) => (
                                        <tr key={key}>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400 w-1/3">
                                                {key}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-white">
                                                {value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 p-6 bg-white/5 rounded-lg border border-purple-500/20"
                    >
                        <h2 className="text-2xl font-semibold text-white mb-4">Features & Alarms</h2>
                        {product.features && product.features.length > 0 && (
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {product.additionalSpecs && product.additionalSpecs.length > 0 && (
                            <div className="mt-6 overflow-x-auto">
                                <table className="min-w-full divide-y divide-purple-700/50">
                                    <tbody className="bg-transparent divide-y divide-purple-700/50">
                                        {product.additionalSpecs.map(([key, value]) => (
                                            <tr key={key}>
                                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-400 w-1/3">
                                                    {key}
                                                </td>
                                                <td className="px-4 py-3 text-sm text-white">
                                                    {value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;