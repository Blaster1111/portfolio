import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:portfolio/constants/colors.dart';

class MainDesktop extends StatelessWidget {
  const MainDesktop({super.key});

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    final screenWidth = screenSize.width;
    final screenHeigh = screenSize.height;
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 20.0,
      ),
      height: screenSize.height / 1.2,
      constraints: BoxConstraints(
        minHeight: 350.0,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "Hi,\nI'm Rudra Shukla\nA Full Stack App Developer",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 30.0,
                  height: 1.5,
                  color: CustomColor.whitePrimary,
                ),
              ),
              SizedBox(
                height: 15.0,
              ),
              SizedBox(
                width: 250,
                child: ElevatedButton(
                  style: ButtonStyle(
                    backgroundColor:
                        MaterialStateProperty.all(CustomColor.yellowPrimary),
                  ),
                  onPressed: () {},
                  child: Text(
                    "Get Resume",
                    style: TextStyle(
                        color: CustomColor.whitePrimary,
                        fontWeight: FontWeight.bold),
                  ),
                ),
              ),
            ],
          ),
          Opacity(
            opacity: 0.65,
            child: Image.asset(
              "assets/my_flutter_avatar.png",
              width: screenWidth / 3,
            ),
          ),
        ],
      ),
    );
  }
}
